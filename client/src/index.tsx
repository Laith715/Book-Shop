import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import StoreConfiguration from './store/store.configuration';
import { createBrowserHistory, History } from 'history';

const rootElement = document.getElementById('root');
const history: History = createBrowserHistory();
const initialState = window.INITIAL_REDUX_STATE;
const store = StoreConfiguration(history, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
