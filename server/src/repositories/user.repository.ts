import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { Repositories } from 'src/constants';

@Injectable()
export class UserRepository {
    // constructor(@Inject(Repositories.UserRepository) private readonly userRepository: typeof User) { }

    // async findAll(): Promise<User[]> {
    //     return await this.userRepository.findAll<User>();
    // }

    // async insert(userModel: User): Promise<User> {
    //     return await this.userRepository.create(userModel);
    // }
}
