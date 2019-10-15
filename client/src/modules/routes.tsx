import App from '../App';
import { Route, Switch } from 'react-router-dom';
import React, { SFC } from 'react';
import AuthComponent from './auth/auth.component';

const Routes: SFC = () => (
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/home' component={AuthComponent} />
    </Switch>
);

export default Routes;
