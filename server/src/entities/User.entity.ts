import { Table, Model, Column, DataType, TableOptions, CreatedAt } from 'sequelize-typescript';

@Table({ tableName: 'Users', timestamps: true, updatedAt: false, deletedAt: false } as TableOptions)
export class User extends Model<User> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        unique: true,
        field: 'Id',
        autoIncrement: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue: false,
    })
    firstName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue: false,
    })
    lastName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    email!: string;

    @CreatedAt
    @Column({
        type: DataType.DATE,
    })
    creationDateTimeUTC: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    passwordHash!: string;
}
