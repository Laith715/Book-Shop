import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/database/entities/user.entity';
import { Author } from 'src/database/entities/author.entity';
import { SequelizeInstance } from 'src/constants';
import { Environment } from 'src/config/configuration.environment';

export const dataBaseProviders = [
    {
        provide: SequelizeInstance,
        useFactory: async () => {
            const config: Environment = new Environment();
            const sequelize = new Sequelize({
                dialect: config.dialect,
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
