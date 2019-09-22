import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { CoreModule } from 'src/core/core.module';

@Module({
  imports: [AuthModule, CoreModule],
})
export class RootModule { }
