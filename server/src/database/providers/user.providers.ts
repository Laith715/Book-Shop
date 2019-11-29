import { User } from 'src/modules/database/entities/user.entity';
import { Constants } from 'src/constants';

export const userProviders = [
    {
        provide: Constants.RepositoryProviders.UserProvider,
        useValue: User,
    },
];
