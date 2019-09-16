import { Module } from '@nestjs/common';
import { AppController } from 'src/controllers/app.controller';
import { AppService } from 'src/services/app.service';
import { DataBaseModule } from 'src/modules/DataBase.module';

@Module({
  imports: [DataBaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
