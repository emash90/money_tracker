import { Injectable } from '@nestjs/common';
import { Income } from './interfaces/income.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class IncomesService {
    constructor(@InjectModel('Income') private readonly incomeModel: Model<Income>) {}

    async findAll(): Promise<Income[]> {
        return await this.incomeModel.find();
    }

    async findOne(id: string): Promise<Income> {
        return await this.incomeModel.findById(id);
    }

    async create(income: Income): Promise<Income> {
        const newIncome = new this.incomeModel(income);
        return await newIncome.save();
    }

    async update(id: string, income: Income): Promise<Income> {
        return await this.incomeModel.findByIdAndUpdate(id, income, { new: true });
    }

    async delete(id: string): Promise<Income> {
        return await this.incomeModel.findByIdAndRemove(id);
    }

}
