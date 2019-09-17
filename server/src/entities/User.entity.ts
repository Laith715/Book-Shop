import { Model } from 'sequelize/types';

export class User extends Model<User> {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    createdDateTimeUTC: Date;
}
