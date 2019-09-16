import { Model } from 'sequelize/types';
import { Table, Column, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        unique: true,
        field: 'Id',
    })
    id: number;

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column({
        unique: true,
        type: DataType.STRING,
    })
    email: string;
}
