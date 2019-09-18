import { Model } from 'sequelize';

export class OrderItems extends Model<OrderItems> {
    id: number;
    amount: number;
    currency: string;
    printingEditionId: number;
    count: number;
}
