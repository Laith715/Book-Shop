import { Controller, Post } from '@nestjs/common';
import { FilterModel } from 'src/modules/printing-editions/models/filter.model';
import { PrintingEditionService } from 'src/modules/printing-editions/printing-edtion.service';

@Controller('printingEdition')
export class PrintingEditionController {
    constructor(
        private readonly printingEditionService: PrintingEditionService,
    ) { }

    @Post('getFiltered')
    public async getFiltered(filterModel: FilterModel) {

    }
}