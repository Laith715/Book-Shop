import { Model } from 'sequelize/types';

export class Role extends Model<Role> {
    id: number;
    naame: string;
}
