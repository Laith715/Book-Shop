import { LoginModel } from '../models/auth.login.model';
import { action } from 'typesafe-actions';
import { AuthActionTypes } from './auth.types';

export const AuthorizationRequested = (loginModel: LoginModel) => action(AuthActionTypes.AuthorizationRequested, loginModel);
export const AuthorizationSuccess = (token: string) => action(AuthActionTypes.AuthorizationSuccess, token);
export const AuthorizationError = (errors: Error[]) => action(AuthActionTypes.AuthorizationError, errors);
