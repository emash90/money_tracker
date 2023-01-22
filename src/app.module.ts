import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { WalletsController } from './wallets/wallets.controller';
//import { WalletsService } from './wallets/wallets.service';
import { WalletsModule } from './wallets/wallets.module';
import { ExpensesModule } from './expenses/expense.module';
import { IncomesModule } from './incomes/incomes.module';
import { MongooseModule } from '@nestjs/mongoose';
//import { ExpensesController } from './expenses/expenses.controller';
//import { ExpensesService } from './expenses/expenses.service';
//import { IncomesController } from './incomes/incomes.controller';
//import { IncomesService } from './incomes/incomes.service';
// import { AuthController } from './auth/auth.controller';
// import { AuthService } from './auth/auth.service';
import config from './config/keys';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ WalletsModule, ExpensesModule, IncomesModule, AuthModule, MongooseModule.forRoot(config.mongoURI)],
  // controllers: [AuthController],
  // providers: [AuthService],
  // controllers: [IncomesController],
  // providers: [IncomesService],
  // controllers: [ExpensesController],
  // providers: [ExpensesService],
  // controllers: [AppController, WalletsController],
  // providers: [AppService, WalletsService],
})
export class AppModule {}
