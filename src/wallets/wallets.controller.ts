import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateWalletDto } from './dto/create_wallet_dto';
import { WalletsService } from './wallets.service';
import { Wallet } from './interfaces/wallet.interface';



@Controller('wallets')
export class WalletsController {
    constructor(private readonly walletsService: WalletsService) {}
    @Get() // GET /wallets
    findAll(): Promise<Wallet[]> {
        return this.walletsService.findAll();
    }

    @Get(':id') // :id is a placeholder for a parameter
    findOne(@Param() params): Promise<Wallet> { // @Param() is a decorator that extracts the parameter from the request object
        return this.walletsService.findOne(params.id);
    }

    @Post() // POST /wallets
    create(@Body() createWalletDto: CreateWalletDto): Promise<String | Wallet> {
        return this.walletsService.create(createWalletDto);
    }

    @Put(':id') // PATCH /wallets/:id
    update(@Param('id') id, @Body() updateWalletDto: CreateWalletDto): Promise<Wallet> {
        return this.walletsService.update(id, updateWalletDto);
    }

    @Delete(':id') // DELETE /wallets/:id
    remove(@Param('id') id): Promise<Wallet> {
        return this.walletsService.delete(id);
    }
}
