import { NestFactory } from '@nestjs/core';
import { RootModule } from 'src/root.module';
import bodyParser = require('body-parser');

async function bootstrap() {
  const app = await NestFactory.create(RootModule, { cors: false });
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  await app.listen(3001);
}
bootstrap();
