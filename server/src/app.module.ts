import { Module } from '@nestjs/common';
import { AccountController } from 'src/controllers/account.controller';
import { AccountService } from 'src/services/account.service';
import { dataBaseProviders } from 'src/core/providers/database.providers';
import { UserRepository } from 'src/repositories/user.repository';
import { UserProviders } from 'src/core/providers/user.providers';

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [...dataBaseProviders, ...UserProviders, UserRepository, AccountService],
  exports: [...dataBaseProviders, ...UserProviders],
})
export class AppModule { }
