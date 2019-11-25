import { Module } from '@nestjs/common';
import { Environment } from 'src/config/configuration.environment';

@Module({
    providers: [
        Environment,
    ],
    exports: [
        Environment,
    ],
})
export class CoreModule { }
