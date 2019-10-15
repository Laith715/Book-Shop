import { combineReducers } from 'redux';
import { History } from 'history';
import { AuthReducer } from '../../auth/store/auth.reducer';
import { connectRouter } from 'connected-react-router';

export const createRootReducer = (history: History) => combineReducers({
    auth: AuthReducer,
    router: connectRouter(history),
});
