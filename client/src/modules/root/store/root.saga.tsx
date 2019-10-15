import { all, fork } from 'redux-saga/effects';
import AuthSaga from '../../auth/store/auth.sagas';

export function* rootSaga() {
    yield all([fork(AuthSaga)]);
}
