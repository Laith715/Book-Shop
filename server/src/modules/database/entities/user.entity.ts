import { Table, Model, Column, DataType, TableOptions, CreatedAt } from 'sequelize-typescript';

@Table({ tableName: 'Users', updatedAt: false, deletedAt: false } as TableOptions)
export class User extends Model<User> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        unique: true,
        field: 'Id',
        autoIncrement: true,
    })
    public id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue: false,
    })
    public firstName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue: false,
    })
    public lastName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    public email: string;

    @CreatedAt
    @Column({
        type: DataType.DATE,
    })
    public creationDateTimeUTC: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public passwordHash: string;
}
