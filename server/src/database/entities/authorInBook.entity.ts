import { Model } from 'sequelize-typescript';

export class AuthorInBook extends Model<AuthorInBook> {
    public authorId: number;
    public printingEditionId: number;
    public creationDateTimeUTC: Date;
}
