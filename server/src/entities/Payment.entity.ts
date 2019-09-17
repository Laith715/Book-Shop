import { Model } from 'sequelize/types';

export class Payment extends Model<Payment> {
    id: number;
    transactionId: number;
}
