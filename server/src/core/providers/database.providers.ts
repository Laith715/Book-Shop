import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/entities/user.entity';
import { Dialect } from 'sequelize/types';
import { Author } from 'src/entities/author.entity';
import { SequelizeInstance, DefaultEnvironment } from 'src/constants';
import { Environment } from 'src/config/configuration.environment';

export const dataBaseProviders = [
    {
        provide: SequelizeInstance,
        useFactory: async () => {
            const config: Environment = new Environment(`${process.env.NODE_ENV || DefaultEnvironment}.env`);
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
