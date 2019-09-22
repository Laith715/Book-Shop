import { UserModel } from 'src/models/user.model';
import { User } from 'src/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.repository';
import { HashSaltRounds } from 'src/constants';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AccountService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService,
        ) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userRepository.findByEmail(email);
        const bcrypt = require('bcrypt');
        if (!user) {
            return null;
        }
        const passwordIsCorrect: boolean = await new Promise((resolve, reject) => {
            bcrypt.compare(password, user.passwordHash, (error: any, response: any) => {
                return error || !response;
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

    async login(user: UserModel) {
        const payload = { email: user.email, sub: user.id };
        return {
            acces_token: this.jwtService.sign(payload),
        };
    }
}
