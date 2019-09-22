import { Module } from '@nestjs/common';
import { EnvironmentConfigurations } from 'src/core/providers/configuration.provider';
import { UserProviders } from 'src/core/providers/user.providers';
import { dataBaseProviders } from 'src/core/providers/database.providers';
import { UserRepository } from 'src/repositories/user.repository';

@Module({
    imports: [],
    providers: [
        ...dataBaseProviders,
        ...UserProviders,
        ...EnvironmentConfigurations,
        UserRepository,
    ],
    exports: [
        ...dataBaseProviders,
        ...UserProviders,
        ...EnvironmentConfigurations,
        UserRepository,
    ],
})
export class CoreModule { }
