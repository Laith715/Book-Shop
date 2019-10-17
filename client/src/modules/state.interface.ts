import { AuthState } from './auth/store/auth.reducer';
import { RouterState } from 'connected-react-router';
import { LayoutState } from './Layout/store/layout.reducer';

export interface RootState {
    auth: AuthState;
    layout: LayoutState;
    router: RouterState;
}
