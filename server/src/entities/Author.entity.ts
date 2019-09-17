import { Model } from 'sequelize/types';

export class Author extends Model<Author> {
    id: number;
    name: string;
}
