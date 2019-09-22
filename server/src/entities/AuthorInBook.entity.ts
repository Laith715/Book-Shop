import { Model } from 'sequelize-typescript';

export class AuthorInBook extends Model<AuthorInBook> {
    authorId: number;
    printingEditionId: number;
    creationDateTimeUTC: Date;
}
