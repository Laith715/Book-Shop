import { Model, Table } from 'sequelize-typescript';

@Table
export class UserInRole extends Model<UserInRole> {
    public userId: number;
    public roleId: number;
}
