import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create_expense.dto';
import { Expense } from './interfaces/expense.interface';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
    constructor(private readonly expensesService: ExpensesService) {}
    @Get()
    findAll(): Promise<Expense[]> {
        return this.expensesService.findAll();
    }
    @Get(':id') 
    findOne(@Param() Param): Promise<Expense> {
        return this.expensesService.findOne(Param.id);
    }
    @Post()
    create(@Body() createExpenseDto: CreateExpenseDto): Promise<Expense> {
        return this.expensesService.create(createExpenseDto);
    }

    @Delete(':id')
    remove(@Param('id') id): Promise<Expense> {
        return this.expensesService.delete(id);
    }
    @Put(':id')
    update(@Param('id') id, @Body() updateExpenseDto: CreateExpenseDto): Promise<Expense> {
        return this.expensesService.update(id, updateExpenseDto);
    }
}
