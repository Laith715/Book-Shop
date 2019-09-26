import { ApplicationState } from './state.interface';
import { Store, createStore } from 'redux';
import { createRootReducer } from '../reducers/root.reducer';
import { History } from 'history';

export default function StoreConfiguration(history: History, initialState: ApplicationState): Store<ApplicationState> {
    return createStore(createRootReducer(history), initialState)
}