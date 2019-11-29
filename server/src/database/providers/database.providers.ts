import { Sequelize } from 'sequelize-typescript';
import { Constants } from 'src/constants';
import { Environment } from 'src/config/configuration.environment';
import { Author } from 'src/database/entities/author.entity';
import { User } from 'src/database/entities/user.entity';
import { PrintingEdition } from 'src/database/entities/printing-edition.entity';
import { AuthorInBook } from 'src/database/entities/authorInBook.entity';

export const dataBaseProviders = [
    {
        provide: Constants.SequelizeInstance,
        useFactory: async (config: Environment) => {
            const sequelize = new Sequelize({
                dialect: config.dialect,
                host: config.host,
                port: config.port,
                username: config.user,
                password: config.password,
                database: config.database,
                models: [
                    Author,
                    User,
                    PrintingEdition,
                    AuthorInBook,
                ],
            });
            // await sequelize.sync();
            return sequelize;
        },
        inject: [Environment],
    },
];
