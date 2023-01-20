import { Module } from "@nestjs/common";
import { ExpensesController } from "./expenses.controller";
import { ExpensesService } from "./expenses.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ExpenseSchema } from "./schemas/expense.schema";


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Expense', schema: ExpenseSchema }])],
    controllers: [ExpensesController],
    providers: [ExpensesService]
})

export class ExpensesModule {}