import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
import { DefaultEnvironment } from 'src/constants';
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

    get username(): string {
        return process.env.username;
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
        const filePath: string = `${process.env.NODE_ENV || DefaultEnvironment}.env`;
        dotenv.config({ path: filePath });
    }
}
