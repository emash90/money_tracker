import * as mongoose from 'mongoose';



export const WalletSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    balance: { type: Number, default: 0 },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
}, { timestamps: true });


