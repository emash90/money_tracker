import * as mongoose from 'mongoose';

export const ExpenseSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    walletId: { type: mongoose.Schema.Types.ObjectId, ref: 'Wallet' }
}, { timestamps: true });

