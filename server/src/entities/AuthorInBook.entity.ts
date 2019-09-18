import { Model } from 'sequelize';

export class AuthorInBook extends Model<AuthorInBook> {
    authorId: number;
    printingEditionId: number;
    creationDateTimeUTC: Date;
}
