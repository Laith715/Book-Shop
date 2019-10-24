import { Model } from 'sequelize-typescript';
import { PrintingEditionType } from 'src/database/entities/enums/printing-edition-type';

export class PrintingEdition extends Model<PrintingEdition> {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public currency: string;
    public type: PrintingEditionType;
}
