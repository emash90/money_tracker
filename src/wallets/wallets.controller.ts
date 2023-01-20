import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateWalletDto } from './dto/create_wallet_dto';



@Controller('wallets')
export class WalletsController {
    @Get() // GET /wallets
    findAll(): string {
        return 'This action returns all wallets';
    }

    @Get(':id') // :id is a placeholder for a parameter
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns wallet #${params.id}`;
    }

    @Post() // POST /wallets
    create(@Body() createWalletDto: CreateWalletDto): string {
        return `This action adds a new wallet with name ${createWalletDto.name} and balance ${createWalletDto.balance}`;
    }

    @Put(':id') // PUT /wallets/:id
    update(@Param('id') id, @Body() updateWalletDto: CreateWalletDto): string {
        return `This action updates a wallet #${id} with name ${updateWalletDto.name} and balance ${updateWalletDto.balance}`;
    }

    @Delete(':id') // DELETE /wallets/:id
    remove(@Param('id') id): string {
        return `This action removes a wallet #${id}`;
    }
}
