import { RootState } from './state.interface';
import { Store, createStore, applyMiddleware } from 'redux';
import { createRootReducer } from './root/store/root.reducer';
import { History } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from 'modules/root/store/root.saga';

export default function StoreConfiguration(history: History, initialState: RootState): Store<RootState> {
    const composeEnhancers = composeWithDevTools({});
    const sagaMiddleware = createSagaMiddleware({
        onError: (error: Error) => {
            // tslint:disable-next-line: no-console
            console.log(error);
        },
    });
    const rootReducer = createRootReducer(history);
    const storeEnhancer = composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware));

    const store: Store<RootState> = createStore(rootReducer, initialState, storeEnhancer);

    sagaMiddleware.run(rootSaga);

    return store;
}
