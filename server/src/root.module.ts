import { Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth/auth.module';
import { PrintingEditionModule } from 'src/modules/printing-editions/printing-edition.module';

@Module({
  imports: [
    AuthModule,
    PrintingEditionModule,
  ],
})
export class RootModule { }
