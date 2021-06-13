import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
const PORT = process.env.PORT

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
      .setTitle('CRUD NEST BACKEND')
      .setDescription('REST API Documentation')
      .setVersion('1.0.0')
      .addTag('nest-web-app')
      .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document)

  await app.listen(PORT , () => {console.log(`server is started on port = ${PORT}`)});
  await app.enableCors();
}
bootstrap();
