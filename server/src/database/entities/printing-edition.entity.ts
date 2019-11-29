import {
    Model,
    HasMany,
    Column,
    DataType,
    Table,
} from 'sequelize-typescript';
import { PrintingEditionType } from 'src/modules/database/entities/enums/printing-edition-type';
import { AuthorInBook } from 'src/modules/database/entities/authorInBook.entity';

@Table({ tableName: 'PrintingEditions', updatedAt: false, createdAt: false, deletedAt: false })
export class PrintingEdition extends Model<PrintingEdition> {
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
    })
    public name: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public description: string;
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    public price: number;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public currency: string;
    @Column({
        type: DataType.ENUM,
        values: ['None', 'Book', 'Journal', 'NewsPaper'],
        allowNull: false,
    })
    public type: PrintingEditionType;
    @HasMany(() => AuthorInBook)
    public authorInBooks: AuthorInBook[];
}
