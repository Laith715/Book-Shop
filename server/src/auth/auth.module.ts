import { Module } from '@nestjs/common';
import { AccountController } from 'src/auth/account.controller';
import { AccountService } from 'src/auth/account.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserRepository } from 'src/repositories/user.repository';
import { EnvironmentConfigurations } from 'src/core/providers/configuration.provider';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: process.env.jwtSecret,
            signOptions: { expiresIn: '20s' },
        })],
    controllers: [AccountController],
    providers: [AccountService, JwtService, UserRepository],
    exports: [AccountService],
})
export class AuthModule { }
