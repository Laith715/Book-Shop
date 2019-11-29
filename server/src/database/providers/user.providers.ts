import { User } from 'src/database/entities/user.entity';
import { Constants } from 'src/constants';

export const userProviders = [
    {
        provide: Constants.RepositoryProviders.UserProvider,
        useValue: User,
    },
];
