import { Injectable } from '@nestjs/common';
import { FilterModel } from 'src/modules/printing-editions/models/filter.model';
import { PrintingEditionRepository } from 'src/database/repositories/printing-edition.repository';
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
