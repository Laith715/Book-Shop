import { Model } from 'sequelize-typescript';

export class Role extends Model<Role> {
    public id: number;
    public naame: string;
}
