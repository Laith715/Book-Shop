import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import StoreConfiguration from './modules/store.configuration';
import { createBrowserHistory, History } from 'history';
import Main from './main';
import { RootState } from './modules/state.interface';
import { AuthState } from './modules/auth/store/auth.reducer';
import { createMuiTheme } from '@material-ui/core/styles';
import { LayoutState } from './modules/Layout/store/layout.reducer';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { red } from '@material-ui/core/colors';

const rootElement = document.getElementById('root');
const history: History = createBrowserHistory();

const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
};
const defaultTheme = createMuiTheme(themeOptions);
const initialState = {
    auth: {
        loading: false,
        errors: [],
        token: '',
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
