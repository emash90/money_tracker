import { Injectable } from '@nestjs/common';
import { Expense } from './interfaces/expense.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ExpensesService {
    constructor(@InjectModel('Expense') private readonly expenseModel: Model<Expense>) {}

    async findAll(): Promise<Expense[]> {
        return await this.expenseModel.find();
    }

    async findOne(id: string): Promise<Expense> {
        return await this.expenseModel.findById(id);
    }

    async create(expense: Expense): Promise<Expense> {
        const newExpense = new this.expenseModel(expense);
        return await newExpense.save();
    }

    async update(id: string, expense: Expense): Promise<Expense> {
        return await this.expenseModel.findByIdAndUpdate(id, expense, { new: true });
    }

    async delete(id: string): Promise<Expense> {
        return await this.expenseModel.findByIdAndRemove(id);
    }

}
