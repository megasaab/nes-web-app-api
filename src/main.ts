import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {PORT} from "./constant";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT , () => {console.log(`server is started on port = ${PORT}`)});
  await app.enableCors();
}
bootstrap();
