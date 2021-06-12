import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import {Module} from "@nestjs/common";
import {AppService} from "./app.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users/user.model";



@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
      ConfigModule.forRoot({
          envFilePath: '.env'
      }),
      SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: Number(process.env.POSTGRES_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRESS_PWD,
          database: process.env.POSTGRES_DB,
          models: [User],
          autoLoadModels: true
      }),
      UsersModule
  ]
})
export class AppModule {}
