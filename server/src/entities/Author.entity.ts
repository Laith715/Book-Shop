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
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue: false,
    })
    name: string;
}
