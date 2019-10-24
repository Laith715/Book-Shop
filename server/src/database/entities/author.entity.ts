import { Table, DataType, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'Authors' })
export class Author extends Model<Author> {
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
    public name: string;
}
