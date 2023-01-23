import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./schemas/user.schema";
import { WalletSchema } from "../wallets/schemas/wallet.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }, { name: 'Wallet', schema: WalletSchema }])],
    controllers: [AuthController],
    providers: [AuthService]
})

export class AuthModule {}