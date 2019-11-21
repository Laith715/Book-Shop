import { action } from 'typesafe-actions';
import { PrintingEditionActionTypes } from 'modules/printing-edition/store/printing-edition.types';
import { FilterModel } from 'modules/printing-edition/models/filter.model';
import { PrintingEditionMainModel } from 'modules/printing-edition/models/printingEditionMain.model';

export const PrintingEditionsDefaultRequested = () => action(PrintingEditionActionTypes.PrintingEditionsDefaultRequested);
export const PrintingEditionsDefaultSuccess = (printiongEdtionMaiModel: PrintingEditionMainModel) => action(PrintingEditionActionTypes.PrintingEditionsDefaultSuccess, printiongEdtionMaiModel);
export const PrintingEditionsDefaultError = (error: Error) => action(PrintingEditionActionTypes.PrintingEditionsDefaultError, error);
export const PrintingEditionsRequested = (fitler: FilterModel) => action(PrintingEditionActionTypes.PrintingEditionsRequested, fitler);
export const PrintingEditionsSuccess = (printiongEdtionMaiModel: PrintingEditionMainModel) => action(PrintingEditionActionTypes.PrintingEditionsSuccess, printiongEdtionMaiModel);
export const PrintingEditionsError = (error: Error) => action(PrintingEditionActionTypes.PrintingEditionsError, error);
