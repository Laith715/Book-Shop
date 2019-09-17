import { Model } from 'sequelize/types';
import { PrintingEditionType } from 'src/enums/PrintingEditionType';

export class PrintingEdition extends Model<PrintingEdition> {
    id: number;
    name: string;
    description: string;
    price: number;
    currency: string;
    type: PrintingEditionType;
}
