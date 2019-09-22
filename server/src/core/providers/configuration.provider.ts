import { Configuration, DefaultEnvironment } from 'src/constants';
import { Environment } from 'src/config/configuration.environment';

export const EnvironmentConfigurations = [
    {
        provide: Configuration,
        useFactory: (): Environment => {
            const configuration: Environment = new Environment(`${process.env.NODE_ENV || DefaultEnvironment}.env`);
            return configuration;
        },
    },
];
