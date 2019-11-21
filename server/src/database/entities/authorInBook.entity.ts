import { Model, Column, DataType, CreatedAt, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Author } from 'src/database/entities/author.entity';
import { PrintingEdition } from 'src/database/entities/printing-edition.entity';

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
    public printingEditionId: number;
    @BelongsTo(() => PrintingEdition)
    public printingEdition: PrintingEdition;
    @CreatedAt
    public creationDateTimeUTC: Date;
}
