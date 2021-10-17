import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateFavDto, CreateUserDto } from 'src/users/users.dto';
import { UsersService } from 'src/users/users.service';

@Controller('api/v1')
export class ApiController {
    constructor(private usersService: UsersService){}

    @Post('users')
    async createUser(@Body() createUserDto: CreateUserDto) {
        await this.usersService.addUser(createUserDto)
    }
    @Get('users')
    async findAllUsers(): Promise<Object> {
        return this.usersService.findAll()
    }
    @Post('favorite')
    async addFavorite(@Body() createFavDto:CreateFavDto): Promise<void> {
        await this.usersService.addFavorite(
            createFavDto.username,
            createFavDto.title, 
            createFavDto.cover_image
        )
    }
}


