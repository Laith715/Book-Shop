import { Repositories } from 'src/constants';
import { User } from 'src/entities/user.entity';

export const UserProviders = [
    {
        provide: Repositories.UserRepository,
        useValue: User,
    },
];
