import { UserModel } from 'src/models/user.model';
import { User } from 'src/entities/user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.repository';
import { HashSaltRounds } from 'src/constants';
import { JwtService } from '@nestjs/jwt';
import { UserLoginModel } from 'src/models/userLogin.model';
import { RoleModel } from 'src/models/role.model';

@Injectable()
export class AccountService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService,
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

    async register(model: UserModel): Promise<User> {
        const bcrypt = require('bcrypt');
        const passwordHashs: string = await new Promise((resolve, reject) => {
            bcrypt.hash(model.passwordHash, HashSaltRounds, (error: any, hash: string) => {
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

    async login(user: UserLoginModel) {
        const entity: User = await this.validateUser(user);
        if (!entity) {
            throw new UnauthorizedException('Email or password is not valid.');
        }
        const payload: object = { email: entity.email, id: entity.id, role: RoleModel };
        return {
            acces_token: await this.jwtService.signAsync(payload),
        };
    }
}
