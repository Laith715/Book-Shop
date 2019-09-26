import { SFC } from 'react';
import App from './App';
import React from 'react';
import { Route } from 'react-router-dom';

const Routes: SFC = () => (<App>
    <Route exact path="/" component={App} />
</App>)
export default Routes;