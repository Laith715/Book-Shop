import { AuthState } from './auth/store/auth.reducer';
import { RouterState } from 'connected-react-router';
import { LayoutState } from './Layout/store/layout.reducer';
import { NavigationState } from './navigation-bar/store/navigation-bar.reducer';

export interface RootState {
    auth: AuthState;
    layout: LayoutState;
    router: RouterState;
    navigation: NavigationState;
}
