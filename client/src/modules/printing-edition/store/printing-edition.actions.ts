import { action } from 'typesafe-actions';
import { PrintingEditionActionTypes } from 'modules/printing-edition/store/printing-edition.types';
import { FilterModel } from 'modules/printing-edition/models/filter.model';

export const PrintingEditionsDefaultRequested = () => action(PrintingEditionActionTypes.PrintingEditionsDefaultRequested);
export const PrintingEditionsDefaultSuccess = () => action(PrintingEditionActionTypes.PrintingEditionsDefaultSuccess);
export const PrintingEditionsDefaultErrors = () => action(PrintingEditionActionTypes.PrintingEditionsDefaultErrors);
export const PrintingEditionsRequested = (fitler: FilterModel) => action(PrintingEditionActionTypes.PrintingEditionsRequested, fitler);
export const PrintingEditionsSuccess = () => action(PrintingEditionActionTypes.PrintingEditionsSuccess);
export const PrintingEditionsErrors = () => action(PrintingEditionActionTypes.PrintingEditionsErrors);
