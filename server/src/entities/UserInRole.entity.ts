import { Model } from 'sequelize-typescript';

export class Role extends Model<Role> {
    id: number;
    naame: string;
}
