import { RegisterModel } from 'src/models/register.model';
import { User } from 'src/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class AccountService {
    constructor(private readonly userRepository: UserRepository) { }

    async register(model: RegisterModel): Promise<User[]> {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;

        await bcrypt.hash(model.password, saltRounds, (err: any, hash: string) => {
            model.password = hash;
        });
        // const user = await this.userRepository.findAll();
        return null;
    }
}
