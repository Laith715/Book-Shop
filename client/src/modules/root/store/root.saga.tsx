import { all, fork } from 'redux-saga/effects';
import AuthSaga from 'modules/auth/store/auth.sagas';

export function* rootSaga() {
    yield all([fork(AuthSaga)]);
}
