import { Configuration, DefaultEnvironment } from 'src/constants';
import { EnvironmentConfiguration } from 'src/config/configuration.environment';

export const EnvironmentConfigurations = [
    {
        provide: Configuration,
        useFactory: (): EnvironmentConfiguration => {
            const configuration: EnvironmentConfiguration = new EnvironmentConfiguration(`${process.env.NODE_ENV} || ${DefaultEnvironment}`);
            return configuration;
        },
    },
];
