import { fork, all } from 'redux-saga/effects';



export default function* PrintingEditionSaga() {
    yield all([fork()]);
}
