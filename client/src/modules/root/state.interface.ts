import { AuthState } from 'modules/auth/store/auth.reducer';
import { LayoutState } from 'modules/Layout/store/layout.reducer';
import { RouterState } from 'connected-react-router';
import { NavigationState } from 'modules/navigation-bar/store/navigation-bar.reducer';

export interface RootState {
    auth: AuthState;
    layout: LayoutState;
    router: RouterState;
    navigation: NavigationState;
    printingEdition: PrintingEditionState;
}
