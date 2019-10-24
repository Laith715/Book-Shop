import { Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth/auth.module';

@Module({
  imports: [AuthModule],
})
export class RootModule { }
