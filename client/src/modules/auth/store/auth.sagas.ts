import { takeEvery, call, put, all, fork } from 'redux-saga/effects';
import apiCall from '../../../util/api';
import { AuthorizationError, AuthorizationSuccess, AuthorizationRequested } from './auth.actions';
import { AuthActionTypes } from './auth.types';

function* LogIn(action: ReturnType<typeof AuthorizationRequested>) {
    try {
        const responseModel = yield call(apiCall, 'post', 'account/login', action.payload);
        if (!responseModel.error) {
            yield put(AuthorizationSuccess(responseModel));
        }
        if (responseModel.error) {
            yield put(AuthorizationError([responseModel.error]));
        }
    } catch (error) {
        if (error instanceof Error && error.stack) {
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
