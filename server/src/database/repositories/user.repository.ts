import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/database/entities/user.entity';
import { UserProvider } from 'src/constants';
import { UserModel } from 'src/models/user.model';

@Injectable()
export class UserRepository {
    constructor(@Inject(UserProvider) private readonly userRepository: typeof User) { }

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
