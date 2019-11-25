import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/modules/database/entities/user.entity';
import { Constants } from 'src/constants';
import { UserModel } from 'src/modules/auth/models/user.model';

@Injectable()
export class UserRepository {
    constructor(
        @Inject(Constants.RepositoryProviders.UserProvider) private readonly userRepository: typeof User,
    ) { }

    async findAll(): Promise<User[]> {
        return await this.userRepository.findAll<User>();
    }

    async findById(id: number): Promise<User> {
        return await this.userRepository.findOne({ where: { id } });
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return await this.userRepository.findOne({ where: { email } });
    }

    async insert(userModel: UserModel): Promise<User> {
        return await this.userRepository.create(userModel);
    }
}
