import { Model } from 'sequelize';

export class Author extends Model<Author> {
    id: number;
    name: string;
}
