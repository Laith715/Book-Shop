import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Theme, createStyles, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { RootState } from 'modules/root/state.interface';

interface PropsFromState {
    theme: Theme;
}

interface PropsFromDispatch {

}

type AllProps = PropsFromState & PropsFromDispatch;

const NavigationBar: React.FC<AllProps> = () => {
    const classes = useStyles() as any;

    return (<div className={classes.root}>
        <AppBar position='static'>
            <Toolbar variant='dense'>
                <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' color='inherit'>
                BookShop
            </Typography>
            </Toolbar>
        </AppBar>
    </div>);
};

const mapToStateProps = ({ layout }: RootState): PropsFromState => ({
    theme: layout.theme,
});

const mapToDispatch: PropsFromDispatch = {

};

export default connect(mapToStateProps, mapToDispatch)(NavigationBar);

const useStyles = makeStyles((theme: Theme) => {
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
    });
});
