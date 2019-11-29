import { Injectable, Inject } from '@nestjs/common';
import { Constants } from 'src/constants';
import { UserModel } from 'src/modules/auth/models/user.model';
import { User } from 'src/database/entities/user.entity';

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
