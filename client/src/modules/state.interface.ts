import { AuthState } from './auth/store/auth.reducer';
import { RouterState } from 'connected-react-router';

export interface RootState {
    auth: AuthState;
    router: RouterState;
}
