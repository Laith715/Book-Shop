import { Model } from 'sequelize';

export class Role extends Model<Role> {
    id: number;
    naame: string;
}
