import { ApplicationState } from './store/state.interface';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';

interface MainProps {
    store: Store<ApplicationState>
    history: History;
}


const Main: React.FC<MainProps> = ({ store, history }) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
            </ConnectedRouter>
        </Provider>
    );
}