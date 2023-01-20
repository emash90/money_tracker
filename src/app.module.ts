import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { WalletsController } from './wallets/wallets.controller';
//import { WalletsService } from './wallets/wallets.service';
import { WalletsModule } from './wallets/wallets.module';
import { ExpensesModule } from './expenses/expense.module';
import { MongooseModule } from '@nestjs/mongoose';
//import { ExpensesController } from './expenses/expenses.controller';
//import { ExpensesService } from './expenses/expenses.service';
import config from './config/keys';


@Module({
  imports: [ WalletsModule, ExpensesModule, MongooseModule.forRoot(config.mongoURI)],
  // controllers: [ExpensesController],
  // providers: [ExpensesService],
  // controllers: [AppController, WalletsController],
  // providers: [AppService, WalletsService],
})
export class AppModule {}
