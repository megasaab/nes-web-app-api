import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import {Module} from "@nestjs/common";
import {AppService} from "./app.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users/user.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';



@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
      ConfigModule.forRoot({
          envFilePath: '.env'
      }),
      SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST || 'localhost',
          port: Number(process.env.POSTGRES_PORT) || 5432,
          username: process.env.POSTGRES_USER || 'postgres',
          password: process.env.POSTGRESS_PWD || 'example',
          database: process.env.POSTGRES_DB || 'nest-app',
          models: [User, Role, UserRoles],
          autoLoadModels: true
      }),
      UsersModule,
      RolesModule,
      AuthModule
  ]
})
export class AppModule {}
