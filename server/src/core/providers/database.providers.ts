import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/entities/user.entity';

export const dataBaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'BookShopUser',
                password: 'Qwe123!!',
                database: 'BookShop',
                models: [User],
            });
            await sequelize.sync();
            return sequelize;
        },
    },
];
