import { Constants } from 'src/constants';
import { PrintingEdition } from 'src/database/entities/printing-edition.entity';

export const printingEditionProviders = [
    {
        provide: Constants.RepositoryProviders.PrintingEditionProvider,
        useValue: PrintingEdition,
    },
];
