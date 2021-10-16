import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { favDto } from 'src/favorites/favs.dto';
import { favs } from 'src/favorites/favs.entity';
import { favService } from 'src/favorites/favs.service';

@Controller('api/v1')
export class ApiController {
    constructor(private favService: favService){}

    @Post('fav')
    async create(@Body() createFavDto: favDto) {
        await this.favService.add(createFavDto)
    }

    @Get('favs')
    async findAll(): Promise<favs[]> {
        return await this.favService.findAll()
    }
}


