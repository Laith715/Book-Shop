import { Module } from '@nestjs/common';
import { AccountController } from 'src/auth/account.controller';
import { AccountService } from 'src/auth/account.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Environment } from 'src/config/configuration.environment';
import { DefaultEnvironment, DefaultStrategy } from 'src/constants';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { CoreModule } from 'src/core/core.module';

const configuration: Environment = new Environment(`${process.env.NODE_ENV || DefaultEnvironment}.env`);

@Module({
    imports: [
        CoreModule,
        PassportModule.register({ defaultStrategy: DefaultStrategy }),
        JwtModule.register({
            secret: configuration.jwtSecret,
            signOptions: { expiresIn: 20 },
        }),
    ],
    controllers: [AccountController],
    providers: [AccountService, JwtStrategy],
    exports: [AccountService],
})
export class AuthModule { }
