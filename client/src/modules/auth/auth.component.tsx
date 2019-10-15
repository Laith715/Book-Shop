import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { LoginModel } from './models/auth.login.model';
import { AuthorizationRequested } from './store/auth.actions';
import { RootState } from '../state.interface';

interface PropsFromState {
    loading: boolean;
    token: string;
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
            <div>
                <form className='login-form'>
                    <label htmlFor='email'>Email</label>
                    <input value={this.state.email} onChange={this.emailChangeHandler} name='email' type='email' placeholder='Enter your email' />

                    <label htmlFor='password'></label>
                    <input value={this.state.password} onChange={this.passwordChangeHandler} name='password' type='password' placeholder='Enter your password' />

                    <button onClick={this.loginHandler}>Login</button>
                </form>
            </div>
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
