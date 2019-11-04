import React from 'react';
import ReactDOM from 'react-dom';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { red, teal, green } from '@material-ui/core/colors';
import { TokenModel } from 'modules/root/models/token.model';
import { createBrowserHistory, History } from 'history';
import { AuthState } from 'modules/auth/store/auth.reducer';
import { LayoutState } from 'modules/Layout/store/layout.reducer';
import { RootState } from 'modules/root/state.interface';

import StoreConfiguration from 'modules/root/store.configuration';
import Main from 'modules/root/main';

import * as serviceWorker from 'serviceWorker';

const rootElement = document.getElementById('root');
const history: History = createBrowserHistory();

const themeOptions: ThemeOptions = {
    palette: {
        primary: teal,
        secondary: green,
        error: red,
        type: 'dark',
    },
};
const defaultTheme = createMuiTheme(themeOptions);
const initialState = {
    auth: {
        loading: false,
        errors: [],
        token: new TokenModel(),
    } as AuthState,
    layout: {
        theme: defaultTheme,
    } as LayoutState,
} as RootState;

const store = StoreConfiguration(history, initialState);

ReactDOM.render(<Main store={store} history={history} theme={defaultTheme} />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
