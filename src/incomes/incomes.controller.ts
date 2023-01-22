import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateIncomeDTO } from './dto/create_income.dto';
import { IncomesService } from './incomes.service';
import { Income } from './interfaces/income.interface';


@Controller('incomes')
export class IncomesController {
    constructor(private readonly incomesService: IncomesService) {}
    @Get()
    findAll(): Promise<Income[]> {
        return this.incomesService.findAll();
    }

    @Get(':id')
    findOne(@Param() Param): Promise<Income> {
        return this.incomesService.findOne(Param.id);
    }

    @Post()
    create(@Body() createIncomeDto: CreateIncomeDTO): Promise<Income> {
        return this.incomesService.create(createIncomeDto);
    }

    @Delete(':id')
    remove(@Param('id') id): Promise<Income> {
        return this.incomesService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateIncomeDto: CreateIncomeDTO): Promise<Income> {
        return this.incomesService.update(id, updateIncomeDto);
    }
}

