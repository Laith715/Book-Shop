import { Module } from '@nestjs/common';
import { dataBaseProviders } from 'src/core/providers/database.providers';
import { UserRepository } from 'src/repositories/user.repository';
import { UserProviders } from 'src/core/providers/user.providers';
import { EnvironmentConfigurations } from 'src/core/providers/configuration.provider';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [
    ...dataBaseProviders,
    ...UserProviders,
    ...EnvironmentConfigurations,
    UserRepository],
})
export class RootModule { }
