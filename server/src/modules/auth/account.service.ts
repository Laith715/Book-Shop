import { Injectable, UnauthorizedException } from '@nestjs/common';
import { sign, verify, VerifyErrors, JsonWebTokenError } from 'jsonwebtoken';

import { UserModel } from 'src/modules/auth/models/user.model';
import { User } from 'src/modules/database/entities/user.entity';
import { UserRepository } from 'src/modules/database/repositories/user.repository';
import { Constants } from 'src/constants';
import { UserLoginModel } from 'src/modules/auth/models/userLogin.model';
import { RoleModel } from 'src/modules/auth/models/role.model';
import { Environment } from 'src/config/configuration.environment';
import { TokenModel } from 'src/modules/auth/models/token.model';

@Injectable()
export class AccountService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly environment: Environment,
    ) { }

    async validateUser(userLoginModel: UserLoginModel): Promise<User | null> {
        const user = await this.userRepository.findByEmail(userLoginModel.email);
        if (!user) {
            throw new UnauthorizedException('Email or password is not valid.');
        }
        const bcrypt = require('bcrypt');
        const passwordIsCorrect: boolean = await new Promise((resolve, reject) => {
            bcrypt.compare(userLoginModel.password, user.passwordHash, (error: any, response: any) => {
                if (error) {
                    reject(error);
                }
                resolve(response);
            });
        });
        return passwordIsCorrect ? user : null;
    }

    private async validateUserById(id: number): Promise<User> {
        if (!id) {
            return;
        }

        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new UnauthorizedException('User was not found.');
        }
        return user;
    }

    async register(model: UserModel): Promise<User> {
        const bcrypt = require('bcrypt');
        const passwordHashs: string = await new Promise((resolve, reject) => {
            bcrypt.hash(model.passwordHash, Constants.HashSaltRounds, (error: any, hash: string) => {
                if (error) {
                    reject(error);
                }
                resolve(hash);
            });
        });
        const userFromModel: UserModel = {
            id: null,
            firstName: model.firstName,
            lastName: model.lastName,
            email: model.email,
            passwordHash: passwordHashs,
            createtinDateTimeUTC: null,
        };
        const newUser = await this.userRepository.insert(userFromModel);
        return newUser;
    }

    async login(user: User): Promise<TokenModel> {
        if (!user) {
            throw new UnauthorizedException('Email or password is not valid.');
        }
        const payload: object = { email: user.email, id: user.id, role: RoleModel };

        const accessToken: string = sign(payload, this.environment.jwtSecret, { expiresIn: '10m' });
        const refreshToken: string = sign({ id: user.id }, this.environment.jwtRefreshSecret, { expiresIn: '24h' });

        return new TokenModel(accessToken, refreshToken);
    }

    async refreshToken(refreshToken: string): Promise<TokenModel> {
        const payload: VerifyErrors | object | string = await new Promise((resolve, reject) => {
            verify(refreshToken, this.environment.jwtRefreshSecret, (err, decoded) => {
                if (err) {
                    reject(err);
                }
                resolve(decoded);
            });
        });
        if (payload instanceof JsonWebTokenError) {
            throw new UnauthorizedException(payload.message);
        }
        if (typeof payload === 'object' && (payload as any).id) {
            const user: User = await this.validateUserById((payload as any).id);
            const tokenModel: TokenModel = await this.login(user);

            return tokenModel;
        }
        throw new UnauthorizedException('RefreshToken has wrong data format');
    }
}
