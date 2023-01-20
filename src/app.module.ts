import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletsController } from './wallets/wallets.controller';

@Module({
  imports: [],
  controllers: [AppController, WalletsController],
  providers: [AppService],
})
export class AppModule {}
