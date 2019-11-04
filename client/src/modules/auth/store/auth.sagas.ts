import { takeEvery, call, put, all, fork } from 'redux-saga/effects';
import apiCall from 'util/api';
import { TokenModel } from 'modules/root/models/token.model';
import { TokenStorage } from 'util/token.storage';
import { AxiosResponse } from 'axios';
import { AuthorizationRequested, AuthorizationSuccess, AuthorizationError } from 'modules/auth/store/auth.actions';
import { AuthActionTypes } from 'modules/auth/store/auth.types';

function* LogIn(action: ReturnType<typeof AuthorizationRequested>) {
    try {
        const responseModel: AxiosResponse<TokenModel> = yield call(apiCall, 'post', 'account/login', action.payload);
        if (responseModel.data instanceof TokenModel) {
            yield put(AuthorizationSuccess(responseModel.data));
            TokenStorage.storeTokenModel(responseModel.data);
        }
    } catch (error) {
        if (error.response.data instanceof Error && error.response.data.stack) {
            yield put(AuthorizationError([error]));
        } else {
            yield put(AuthorizationError([new Error('An unknown error occured.')]));
        }
    }
}

export function* watchLogInSaga() {
    yield takeEvery(AuthActionTypes.AuthorizationRequested, LogIn);
}

export default function* authSaga() {
    yield all([fork(watchLogInSaga)]);
}
