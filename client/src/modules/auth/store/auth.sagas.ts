import { takeEvery, call, put, all, fork } from 'redux-saga/effects';
import { AuthorizationError, AuthorizationSuccess, AuthorizationRequested, UnAuthorizedError, RefreshError } from './auth.actions';
import { AuthActionTypes } from './auth.types';
import apiCall from 'util/api';
import { TokenModel } from 'modules/root/models/token.model';
import { TokenStorage } from 'util/token.storage';
import { AxiosResponse, AxiosError } from 'axios';

function* LogIn(action: ReturnType<typeof AuthorizationRequested>) {
    try {
        const responseModel: AxiosResponse<TokenModel> = yield call(apiCall, 'post', 'account/login', action.payload);
        if (responseModel.data instanceof TokenModel) {
            yield put(AuthorizationSuccess(responseModel.data));
        }
    } catch (error) {
        if (error.response.data instanceof Error && error.response.data.stack) {
            yield put(AuthorizationError([error]));
        } else {
            yield put(AuthorizationError([new Error('An unknown error occured.')]));
        }
    }
}

function* tryRefreshToken(action: ReturnType<typeof UnAuthorizedError>) {
    try {
        const tokenModel: TokenModel = yield call(TokenStorage.refreshToken);
    } catch (error) {
        if (error instanceof Error && error.stack) {
            yield put(RefreshError([error]));
        } else {
            yield put(RefreshError([new Error('An unknown error occured.')]));
        }
    }
}

export function* watchLogInSaga() {
    yield takeEvery(AuthActionTypes.AuthorizationRequested, LogIn);
}

export function* watchUnAuthorized() {
    yield takeEvery(AuthActionTypes.UnAuthorizedError, tryRefreshToken);
}

export default function* authSaga() {
    yield all([fork(watchLogInSaga), fork(watchUnAuthorized)]);
}
