import { Model, Table } from 'sequelize-typescript';

@Table
export class UserInRole extends Model<UserInRole> {
    userId: number;
    roleId: number;
}
