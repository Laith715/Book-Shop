import { Model } from 'sequelize';

export class Payment extends Model<Payment> {
    id: number;
    transactionId: number;
}
