import { User } from 'src/database/entities/user.entity';
import { UserProvider } from 'src/constants';

export const UserProviders = [
    {
        provide: UserProvider,
        useValue: User,
    },
];
