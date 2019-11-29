import { Module } from '@nestjs/common';
import { CoreModule } from 'src/modules/core/core.module';
import { dataBaseProviders } from 'src/database/providers/database.providers';
import { userProviders } from 'src/database/providers/user.providers';
import { printingEditionProviders } from 'src/database/providers/printing-edition.providers';
import { UserRepository } from 'src/database/repositories/user.repository';
import { PrintingEditionRepository } from 'src/database/repositories/printing-edition.repository';

@Module({
    imports: [CoreModule],
    providers: [
        ...dataBaseProviders,
        ...userProviders,
        ...printingEditionProviders,
        UserRepository,
        PrintingEditionRepository,
    ],
    exports: [
        ...dataBaseProviders,
        ...userProviders,
        ...printingEditionProviders,
        UserRepository,
        PrintingEditionRepository,
    ],
})
export class DataBaseModule { }
