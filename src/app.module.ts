import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { WalletsController } from './wallets/wallets.controller';
//import { WalletsService } from './wallets/wallets.service';
import { WalletsModule } from './wallets/wallets.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';


@Module({
  imports: [ WalletsModule, MongooseModule.forRoot(config.mongoURI)],
  // controllers: [AppController, WalletsController],
  // providers: [AppService, WalletsService],
})
export class AppModule {}
