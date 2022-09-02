import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ServicesController } from './services/services.controller';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { RolesService } from './roles/roles.service';
import { RolesModule } from './roles/roles.module';


@Module({
  controllers: [ServicesController],
  providers: [RolesService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: 'postgres',
      password: 'root',
      database: process.env.POSTGRES_DB,
      models: [User],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
  ],
})
export class AppModule {}
