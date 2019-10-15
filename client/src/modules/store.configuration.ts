import { RootState } from './state.interface';
import { Store, createStore, applyMiddleware } from 'redux';
import { createRootReducer } from './root/store/root.reducer';
import { History } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root/store/root.saga';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function StoreConfiguration(history: History, initialState: RootState): Store<RootState> {
    const composeEnhancers = composeWithDevTools({});
    const sagaMiddleware = createSagaMiddleware();
    const rootReducer = createRootReducer(history);
    const storeEnhancer = composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware));

    const store = createStore(rootReducer, initialState, storeEnhancer);

    sagaMiddleware.run(rootSaga);

    return store;
}
