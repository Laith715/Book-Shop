import { Model } from 'sequelize/types';

export class AuthorInBook extends Model<AuthorInBook> {
    authorId: number;
    printingEditionId: number;
    creationDateTimeUTC: Date;
}
