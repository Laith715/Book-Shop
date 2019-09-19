import { UserModel } from 'src/models/user.model';
import { User } from 'src/entities/user.entity';
import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.repository';
import { HashSaltRounds, Configuration } from 'src/constants';
import { Environment } from 'src/config/Environment';

@Injectable()
export class AccountService {
    constructor(private readonly userRepository: UserRepository, @Inject(Configuration) private readonly configuration: Environment) { }

    async register(model: UserModel): Promise<User> {
        const currentConfiguration = this.configuration;
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
}
