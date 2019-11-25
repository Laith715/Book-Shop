import { PrintingEditionRepository } from 'src/modules/database/repositories/printing-edition.repository';
import { Injectable } from '@nestjs/common';
import { FilterModel } from 'src/modules/printing-editions/models/filter.model';
@Injectable()
export class PrintingEditionService {
    constructor(
        private readonly printiingEditionRepository: PrintingEditionRepository,
    ) { }

    public async getFiltered(filter: FilterModel): Promise<any> {
        const fromDatabase = await this.printiingEditionRepository.getPrintingEditionsFiltered(filter);
        return fromDatabase;
    }
}
