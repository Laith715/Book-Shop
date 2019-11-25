import { Module } from '@nestjs/common';
import { AccountController } from 'src/modules/auth/account.controller';
import { AccountService } from 'src/modules/auth/account.service';
import { PassportModule } from '@nestjs/passport';
import { Constants } from 'src/constants';
import { JwtStrategy } from 'src/modules/auth/jwt.strategy';
import { CoreModule } from 'src/modules/core/core.module';
import { DataBaseModule } from 'src/modules/database/database.module';

@Module({
    imports: [
        CoreModule,
        DataBaseModule,
        PassportModule.register({ defaultStrategy: Constants.DefaultStrategy }),
    ],
    controllers: [AccountController],
    providers: [AccountService, JwtStrategy],
    exports: [AccountService],
})
export class AuthModule { }
