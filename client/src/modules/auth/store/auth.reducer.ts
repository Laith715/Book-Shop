import { Reducer } from 'redux';
import { TokenModel } from 'modules/auth/models/token.model';
import { AuthActionTypes } from 'modules/auth/store/auth.types';

export interface AuthState {
    token: TokenModel;
    errors: Error[];
    loading: boolean;
}

const initialState: AuthState = {
    token: new TokenModel(),
    errors: [],
    loading: false,
};

export const AuthReducer: Reducer<AuthState> = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionTypes.AuthorizationRequested: {
            return { ...state, loading: true };
        }
        case AuthActionTypes.AuthorizationSuccess: {
            return { ...state, loading: false, token: action.payload };
        }
        case AuthActionTypes.AuthorizationError: {
            return { ...state, loading: false, errors: action.payload };
        }
        default: {
            return state;
        }
    }
};
