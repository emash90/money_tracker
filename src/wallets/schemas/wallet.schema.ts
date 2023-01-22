import * as mongoose from 'mongoose';



export const WalletSchema = new mongoose.Schema({
    name: String,
    balance: Number
}, { timestamps: true });


