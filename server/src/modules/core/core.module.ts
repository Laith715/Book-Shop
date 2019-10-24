import { Module } from '@nestjs/common';
import { UserProviders } from 'src/modules/core/providers/user.providers';
import { dataBaseProviders } from 'src/modules/core/providers/database.providers';
import { UserRepository } from 'src/database/repositories/user.repository';
import { Environment } from 'src/config/configuration.environment';

@Module({
    providers: [
        ...dataBaseProviders,
        ...UserProviders,
        Environment,
        UserRepository,
    ],
    exports: [
        ...dataBaseProviders,
        ...UserProviders,
        Environment,
        UserRepository,
    ],
})
export class CoreModule { }
