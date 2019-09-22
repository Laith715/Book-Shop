import { Module } from '@nestjs/common';
import { AccountController } from 'src/auth/account.controller';
import { AccountService } from 'src/auth/account.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserRepository } from 'src/repositories/user.repository';
import { Environment } from 'src/config/configuration.environment';
import { DefaultEnvironment } from 'src/constants';


const configuration: Environment = new Environment(`${process.env.NODE_ENV || DefaultEnvironment}.env`);

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: configuration.jwtSecret,
            signOptions: { expiresIn: '20s' },
        })],
    controllers: [AccountController],
    providers: [AccountService, JwtService, UserRepository],
    exports: [AccountService, JwtService],
})
export class AuthModule { }
