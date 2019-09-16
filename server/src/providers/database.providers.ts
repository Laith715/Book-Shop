import { Sequelize } from 'sequelize-typescript';

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
            });
            sequelize.addModels([__dirname + 'src/enities/*.entity.ts']);
            await sequelize.sync();

            return sequelize;
        },
    },
];
