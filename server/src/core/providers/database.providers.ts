import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/entities/user.entity';
import { EnvironmentFactory } from 'src/config/environment.factory';
import { Environment } from 'src/config/Environment';
import { Dialect } from 'sequelize/types';
import { Author } from 'src/entities/author.entity';

export const dataBaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const factory: EnvironmentFactory = new EnvironmentFactory();
            const config: Environment = factory.getInstance();
            const sequelize = new Sequelize({
                dialect: config.dialect as Dialect,
                host: config.host,
                port: config.port,
                username: config.username,
                password: config.password,
                database: config.database,
                models: [Author, User],
            });
            await sequelize.sync();
            return sequelize;
        },
    },
];
