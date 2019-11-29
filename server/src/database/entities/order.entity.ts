import { Model } from 'sequelize-typescript';

export class OrderItems extends Model<OrderItems> {
    public id: number;
    public amount: number;
    public currency: string;
    public printingEditionId: number;
    public count: number;
}
