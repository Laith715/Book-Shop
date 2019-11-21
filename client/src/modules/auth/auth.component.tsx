import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { Button, FormControl, InputLabel, Input, Box } from '@material-ui/core';
import { TokenModel } from 'modules/auth/models/token.model';
import { AuthorizationRequested } from 'modules/auth/store/auth.actions';
import { RootState } from 'modules/root/state.interface';
import { LoginModel } from 'modules/auth/models/auth.login.model';

interface PropsFromState {
    loading: boolean;
    token: TokenModel;
    errors: Error[];
}

interface PropsFromDispatch {
    login: typeof AuthorizationRequested;
}

type AllProps = PropsFromState & RouteComponentProps & PropsFromDispatch;

class AuthComponent extends React.Component<AllProps, LoginModel> {
    constructor(props: AllProps) {
        super(props);
        this.state = new LoginModel();

        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
    }

    emailChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ ...this.state, email: event.target.value });
    }

    passwordChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ ...this.state, password: event.target.value });
    }

    loginHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        const loginModel = new LoginModel();

        loginModel.email = this.state.email;
        loginModel.password = this.state.password;
        this.props.login(loginModel);
    }

    render() {
        return (
            <Box component='div'>
                <FormControl>
                    <InputLabel htmlFor='email'>Email</InputLabel>
                    <Input autoFocus={true} value={this.state.email} onChange={this.emailChangeHandler} name='email' type='email' placeholder='Enter your email' />
                </FormControl>
                <FormControl>
                    <InputLabel variant='outlined' htmlFor='password'>Password</InputLabel>
                    <Input value={this.state.password} onChange={this.passwordChangeHandler} name='password' type='password' placeholder='Enter your password' />
                </FormControl>
                <FormControl>
                    <Button color='primary' variant='contained' onClick={this.loginHandler}>Login</Button>
                </FormControl>
            </Box>
        );
    }
}

const mapStateToProps = ({ auth }: RootState): PropsFromState => ({
    loading: auth.loading,
    token: auth.token,
    errors: auth.errors,
});

const mapDispatchToProps: PropsFromDispatch = {
    login: AuthorizationRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
