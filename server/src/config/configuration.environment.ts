import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
import { Constants } from 'src/constants';
import { Dialect } from 'sequelize/types';

@Injectable()
export class Environment {
    get dialect(): Dialect {
        return process.env.dialect as Dialect;
    }

    get host(): string {
        return process.env.host;
    }

    get port(): number {
        return +process.env.port as number;
    }

    get user(): string {
        return process.env.user;
    }

    get password(): string {
        return process.env.password;
    }

    get database(): string {
        return process.env.database;
    }

    get jwtSecret(): string {
        return process.env.jwtSecret;
    }

    get jwtRefreshSecret(): string {
        return process.env.jwtRefreshSecret;
    }

    constructor() {
        const filePath: string = `src/${process.env.NODE_ENV || Constants.DefaultEnvironment}.env`;
        const parsed: dotenv.DotenvConfigOutput = dotenv.config({ path: filePath });
    }
}
