import { Module } from '@nestjs/common';
import { UserProviders } from 'src/core/providers/user.providers';
import { dataBaseProviders } from 'src/core/providers/database.providers';
import { UserRepository } from 'src/repositories/user.repository';
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
        UserRepository,
        Environment,
    ],
})
export class CoreModule { }
