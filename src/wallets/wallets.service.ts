import { Injectable } from '@nestjs/common';
import { Wallet } from './interfaces/wallet.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class WalletsService {
    constructor(@InjectModel('Wallet') private readonly walletModel: Model<Wallet>) {}

    async findAll(): Promise<Wallet[]> {
        return await this.walletModel.find();
    }
    async findOne(id: string): Promise<Wallet> {
        return await this.walletModel.findById(id);
    }

    async create(wallet: Wallet): Promise<String | Wallet> {
        const checkWalletName = await this.walletModel.findOne({ name: wallet.name });
        if (checkWalletName) {
            return 'Wallet name already exists';
        } else {
        const newWallet = new this.walletModel(wallet);
        return await newWallet.save();
        }
    }

    async update(id: string, wallet: Wallet): Promise<Wallet> {
        return await this.walletModel.findByIdAndUpdate(id, wallet, { new: true });
    }

    async delete(id: string): Promise<Wallet> {
        return await this.walletModel.findByIdAndRemove(id);
    }
    

}



