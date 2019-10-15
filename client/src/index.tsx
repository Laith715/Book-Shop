import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import StoreConfiguration from './modules/store.configuration';
import { createBrowserHistory, History } from 'history';
import Main from './main';
import { RootState } from './modules/state.interface';
import { AuthState } from './modules/auth/store/auth.reducer';

const rootElement = document.getElementById('root');
const history: History = createBrowserHistory();
const initialState = {
    auth: {
        loading: false,
        errors: [],
        token: '',
    } as AuthState,
} as RootState;
const store = StoreConfiguration(history, initialState);

ReactDOM.render(<Main store={store} history={history} />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
