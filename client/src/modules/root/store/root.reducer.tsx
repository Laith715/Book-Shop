import { combineReducers } from 'redux';
import { History } from 'history';
import { AuthReducer } from '../../auth/store/auth.reducer';
import { connectRouter } from 'connected-react-router';
import LayoutReducer from '../../Layout/store/layout.reducer';

export const createRootReducer = (history: History) => combineReducers({
    auth: AuthReducer,
    layout: LayoutReducer,
    router: connectRouter(history),
});
