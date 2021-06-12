import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const PORT = process.env.PORT

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT , () => {console.log(`server is started on port = ${PORT}`)});
  await app.enableCors();
}
bootstrap();
