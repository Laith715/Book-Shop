import { Model } from 'sequelize';

export class UserInRole extends Model<UserInRole> {
    userId: number;
    roleId: number;
}
