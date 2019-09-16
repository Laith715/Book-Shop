import { Module } from '@nestjs/common';
import { dataBaseProviders } from 'src/providers/database.providers';

@Module({
    providers: [...dataBaseProviders],
    exports: [...dataBaseProviders],
})
export class DataBaseModule { }
