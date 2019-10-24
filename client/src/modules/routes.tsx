import App from '../App';
import { Route, Switch } from 'react-router-dom';
import React, { SFC } from 'react';
import AuthComponent from './auth/auth.component';
import { Box } from '@material-ui/core';
import NavigationBar from '../modules/navigation-bar/navigation-bar';

const Routes: SFC = () => (
    <Box component='div' color='primary'>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/home' component={AuthComponent} />
        </Switch>
    </Box>
);

export default Routes;
