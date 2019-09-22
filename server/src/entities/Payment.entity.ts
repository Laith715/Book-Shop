import { Model } from 'sequelize-typescript';

export class Payment extends Model<Payment> {
    id: number;
    transactionId: number;
}
