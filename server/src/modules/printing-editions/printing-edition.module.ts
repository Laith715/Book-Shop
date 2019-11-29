import { Module } from '@nestjs/common';
import { CoreModule } from 'src/modules/core/core.module';
import { PrintingEditionService } from 'src/modules/printing-editions/printing-edtion.service';
import { PrintingEditionController } from 'src/modules/printing-editions/printing-edition.controller';
import { DataBaseModule } from 'src/database/database.module';

@Module({
    imports: [
        CoreModule,
        DataBaseModule,
    ],
    providers: [PrintingEditionService],
    controllers: [PrintingEditionController],
    exports: [PrintingEditionService],
})
export class PrintingEditionModule { }
