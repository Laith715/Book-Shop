import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { AuthReducer } from 'modules/auth/store/auth.reducer';
import { LayoutReducer } from 'modules/Layout/store/layout.reducer';
import { NavigationReducer } from 'modules/navigation-bar/store/navigation-bar.reducer';
import { PrintingEditionReducer } from 'modules/printing-edition/store/printing-edition.reducer';

export const createRootReducer = (history: History) => combineReducers({
    auth: AuthReducer,
    layout: LayoutReducer,
    router: connectRouter(history),
    navigation: NavigationReducer,
    printingEdition: PrintingEditionReducer,
});
