import { FilterModel } from 'modules/printing-edition/models/filter.model';
import { Reducer } from 'redux';

export interface PrintingEditionState {
    filter: FilterModel;
}

const initialState = {
    filter: new FilterModel(),
} as PrintingEditionState;

export const PrintingEditionReducer: Reducer<PrintingEditionState> = (state: PrintingEditionState = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};