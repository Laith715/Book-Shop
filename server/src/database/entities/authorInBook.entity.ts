import { Model } from 'sequelize-typescript';
import { Author } from 'src/database/entities/author.entity';
import { PrintingEdition } from 'src/database/entities/printing-edition.entity';

export class AuthorInBook extends Model<AuthorInBook> {

    public authorId: number;
    public printingEditionId: number;

    public author: Author;
    public printingEdition: PrintingEdition;

    public creationDateTimeUTC: Date;
}
