import { PrintingEdition } from 'src/modules/database/entities/printing-edition.entity';

export class FilteredPrintingEditionModel {
    public totalCount: number;
    public printingEditions: PrintingEdition[];
}
