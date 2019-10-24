import { Model } from 'sequelize-typescript';

export class Payment extends Model<Payment> {
    public id: number;
    public transactionId: number;
}
