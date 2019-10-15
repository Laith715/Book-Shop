import { Store } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { RootState } from './modules/state.interface';
import Routes from './modules/routes';

interface MainProps {
    store: Store<RootState>;
    history: History;
}

const Main: React.FC<MainProps> = ({ store, history }) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </Provider>
    );
};

export default Main;
