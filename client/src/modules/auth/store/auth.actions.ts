import { action } from 'typesafe-actions';
import { LoginModel } from 'modules/auth/models/auth.login.model';
import { TokenModel } from 'modules/root/models/token.model';
import { AuthActionTypes } from 'modules/auth/store/auth.types';

export const AuthorizationRequested = (loginModel: LoginModel) => action(AuthActionTypes.AuthorizationRequested, loginModel);
export const AuthorizationSuccess = (token: TokenModel) => action(AuthActionTypes.AuthorizationSuccess, token);
export const AuthorizationError = (errors: Error[]) => action(AuthActionTypes.AuthorizationError, errors);
