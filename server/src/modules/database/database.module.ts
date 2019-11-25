import { Module } from '@nestjs/common';
import { dataBaseProviders } from 'src/modules/database/providers/database.providers';
import { userProviders } from 'src/modules/database/providers/user.providers';
import { printingEditionProviders } from 'src/modules/database/providers/printing-edition.providers';
import { UserRepository } from 'src/modules/database/repositories/user.repository';
import { PrintingEditionRepository } from 'src/modules/database/repositories/printing-edition.repository';
import { CoreModule } from 'src/modules/core/core.module';

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
