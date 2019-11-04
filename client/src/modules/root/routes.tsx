import { Route, Switch } from 'react-router-dom';
import React, { SFC } from 'react';
import { Box } from '@material-ui/core';

import AuthComponent from 'modules/auth/auth.component';
import PrintingEdition from 'modules/printing-edition/printing-edition';

const Routes: SFC = () => (
    <Box component='div' color='primary'>
        <Switch>
            <Route exact path='/' component={PrintingEdition} />
            <Route path='/home' component={AuthComponent} />
        </Switch>
    </Box>
);

export default Routes;
