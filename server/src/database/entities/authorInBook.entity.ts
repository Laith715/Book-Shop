import { Model, Column, DataType, CreatedAt, HasOne, BelongsTo, ForeignKey, Table } from 'sequelize-typescript';
import { Author } from 'src/modules/database/entities/author.entity';
import { PrintingEdition } from 'src/modules/database/entities/printing-edition.entity';

@Table({ tableName: 'AuthorInBooks', createdAt: 'creationDateTimeUTC', updatedAt: false, deletedAt: false })
export class AuthorInBook extends Model<AuthorInBook> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        unique: true,
        field: 'Id',
        autoIncrement: true,
    })
    public id: number;
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: {
            model: 'Authors',
            key: 'Id',
        },
    })
    @ForeignKey(() => Author)
    @Column
    public authorId: number;
    @BelongsTo(() => Author)
    public author: Author;
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: {
            model: 'PrintingEditions',
            key: 'Id',
        },
    })
    @ForeignKey(() => PrintingEdition)
    @Column
    public printingEditionId: number;

    @BelongsTo(() => PrintingEdition)
    public printingEdition: PrintingEdition;
    @CreatedAt
    @Column
    public creationDateTimeUTC: Date;
}
