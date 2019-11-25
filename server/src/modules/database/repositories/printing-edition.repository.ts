import { Injectable, Inject } from '@nestjs/common';
import { PrintingEdition } from 'src/modules/database/entities/printing-edition.entity';
import { FilterModel } from 'src/modules/printing-editions/models/filter.model';
import { AuthorInBook } from 'src/modules/database/entities/authorInBook.entity';
import { Author } from 'src/modules/database/entities/author.entity';
import { Constants } from 'src/constants';
import { Op } from 'sequelize';

@Injectable()
export class PrintingEditionRepository {
    constructor(
        @Inject(Constants.RepositoryProviders.PrintingEditionProvider) private readonly printingEditionRepository: typeof PrintingEdition,
    ) { }

    async getPrintingEditionsFiltered(filter: FilterModel): Promise<{ rows: PrintingEdition[], count: number }> {
        const response = await this.printingEditionRepository.findAndCountAll({
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
                    // where: {
                    //     [Op.any]: {
                    //         model: Author,
                    //         as: 'Author',
                    //     },
                    // },
                },
            },
        });
        return response;
    }
}
