import { EnvironmentFactory } from 'src/config/environment.factory';
import { Environment } from 'src/config/Environment';
import { Configuration } from 'src/constants';

export const EnvironmentConfigurations = [
    {
        provide: Configuration,
        useFactory: (): Environment => {
            const factory: EnvironmentFactory = new EnvironmentFactory();
            const config: Environment = factory.getInstance();
            return config;
        },
    },
];
