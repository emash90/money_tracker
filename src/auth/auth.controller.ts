import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user.dto';
import { User } from './interfaces/user.interface';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post('login')
    login( @Body() createUserDto: CreateUserDto): Promise<User | String> {
        return this.authService.findOne(createUserDto);
    }
    @Post('register')
    register( @Body() createUserDto: CreateUserDto): Promise<String | User> {
        return this.authService.createUser(createUserDto);
    }
    @Put('update/:id')
    updateUser(@Param() Params, @Body() CreateUserDto: CreateUserDto ): Promise<User | String> {
        return this.authService.updateUser(Params.id, CreateUserDto);
    }

    @Get('profile/:id')
    getUserProfile(@Param() Params): Promise<User | String> {
        return this.authService.getUserProfile(Params.id);
    }

    @Get('users')
    getAllUsers(): Promise<User[]> {
        return this.authService.getAllUsers();
    }

    
}
