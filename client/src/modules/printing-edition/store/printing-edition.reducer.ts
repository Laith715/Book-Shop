import { FilterModel } from 'modules/printing-edition/models/filter.model';

export interface PrintingEditionReducer {
    filter: FilterModel;
}

const initialState = {
    filter: new FilterModel(),
} as PrintingEditionReducer;
