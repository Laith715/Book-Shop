import { Injectable, Inject } from '@nestjs/common';
import { PrintingEdition } from 'src/database/entities/printing-edition.entity';
import { PrintingEditionProvider } from 'src/constants';
import { FilterModel } from 'src/modules/printing-editions/models/filter.model';
import { Op } from 'sequelize/types';
import { AuthorInBook } from 'src/database/entities/authorInBook.entity';
import { Author } from 'src/database/entities/author.entity';

@Injectable()
export class PrintingEditionRepository {
    constructor(
        @Inject(PrintingEditionProvider) private readonly printingEditionRepository: typeof PrintingEdition,
    ) { }

    async getPrintingEditionsFiltered(filter: FilterModel) {
        this.printingEditionRepository.findAndCountAll({
            include: [
                {
                    model: AuthorInBook,
                    include: [Author],
                },
            ],
            where: {
                [Op.or]: {
                    name: {
                        [Op.substring]: filter.queryString,
                    },
                },
            },
        });
    }
}
