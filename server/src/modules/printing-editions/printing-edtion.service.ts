import { PrintingEditionRepository } from 'src/database/repositories/printing-edition.repository';
import { Injectable } from '@nestjs/common';
@Injectable()
export class PrintingEditionService {
    constructor(
        private readonly printiingEditionRepository: PrintingEditionRepository,
    ) { }
}
