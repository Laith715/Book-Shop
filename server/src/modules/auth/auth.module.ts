import { Module } from '@nestjs/common';
import { AccountController } from 'src/modules/auth/account.controller';
import { AccountService } from 'src/modules/auth/account.service';
import { PassportModule } from '@nestjs/passport';
import { Environment } from 'src/config/configuration.environment';
import { DefaultStrategy } from 'src/constants';
import { JwtStrategy } from 'src/modules/auth/jwt.strategy';
import { CoreModule } from 'src/modules/core/core.module';

const configuration: Environment = new Environment();

@Module({
    imports: [
        CoreModule,
        PassportModule.register({ defaultStrategy: DefaultStrategy }),
    ],
    controllers: [AccountController],
    providers: [AccountService, JwtStrategy],
    exports: [AccountService],
})
export class AuthModule { }
