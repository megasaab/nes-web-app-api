import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {databaseProviders} from "./database.providers";
import { UsersModule } from './users/users.module';


@Module({
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
  imports: [UsersModule]
})
export class AppModule {}
