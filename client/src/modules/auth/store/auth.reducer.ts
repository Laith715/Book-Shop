import { Reducer } from 'redux';
import { AuthActionTypes } from './auth.types';

export interface AuthState {
    token: string;
    errors: Error[];
    loading: boolean;
}

export const initialState: AuthState = {
    token: '',
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
