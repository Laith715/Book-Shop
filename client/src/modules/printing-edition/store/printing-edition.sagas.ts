import {
    fork,
    all,
    call,
    put,
    takeEvery,
} from 'redux-saga/effects';
import apiCall from 'util/api';
import {
    PrintingEditionsRequested,
    PrintingEditionsError,
    PrintingEditionsSuccess,
    PrintingEditionsDefaultRequested,
    PrintingEditionsDefaultError,
    PrintingEditionsDefaultSuccess,
} from 'modules/printing-edition/store/printing-edition.actions';
import { PrintingEditionMainModel } from 'modules/printing-edition/models/printingEditionMain.model';
import { AxiosResponse } from 'axios';

function* printingEditionsLoad(action: ReturnType<typeof PrintingEditionsRequested>) {
    try {
        const responseModel: AxiosResponse<PrintingEditionMainModel> = yield call(apiCall, 'post', 'printingEdition/getFiltered', action.payload);
        if (responseModel.data && responseModel.data instanceof PrintingEditionMainModel) {
            yield put(PrintingEditionsSuccess(responseModel.data))
        }
    }
    catch (error) {
        if (error.response.data instanceof Error && error.response.data.stack) {
            yield put(PrintingEditionsError(error));
        } else {
            yield put(PrintingEditionsError(new Error('An unknown error occured.')));
        }
    }
}

function* printingEditionDefaultLoad(action: ReturnType<typeof PrintingEditionsDefaultRequested>) {
    try {
        const responseModel: AxiosResponse<PrintingEditionMainModel> = yield call(apiCall, 'get', 'printingEdition/getPrintingEditionDefault');
        if (responseModel.data && responseModel.data instanceof PrintingEditionMainModel) {
            yield put(PrintingEditionsDefaultSuccess(responseModel.data))
        }
    }
    catch (error) {
        if (error.response.data instanceof Error && error.response.data.stack) {
            yield put(PrintingEditionsDefaultError(error));
        } else {
            yield put(PrintingEditionsDefaultError(new Error('An unknown error occured.')));
        }
    }
}


export function* watchDefaultPrintingEditionRequest() {
    yield takeEvery(PrintingEditionsDefaultRequested, printingEditionDefaultLoad);
}

export function* watchPrintingEditionRequests() {
    yield takeEvery(PrintingEditionsRequested, printingEditionsLoad);
}

export default function* PrintingEditionSaga() {
    yield all([fork(watchPrintingEditionRequests)]);
}
