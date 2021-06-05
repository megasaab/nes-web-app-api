import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {databaseProviders} from "./database.providers";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";



@Module({
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
  imports: [
      ConfigModule.forRoot({
          envFilePath: '.env'
      }),
      UsersModule
  ]
})
export class AppModule {}
