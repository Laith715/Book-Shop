import { Model } from 'sequelize';
import { PrintingEditionType } from 'src/entities/enums/printingEditionType';

export class PrintingEdition extends Model<PrintingEdition> {
    id: number;
    name: string;
    description: string;
    price: number;
    currency: string;
    type: PrintingEditionType;
}
