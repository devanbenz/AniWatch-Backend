import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Connection, Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private UsersRepository: Repository<Users>,
        private connection: Connection
    ){}

    async findAll(): Promise<Users[]> {
        return this.UsersRepository.find()
    }

    async findUserByName(name: string): Promise<Users> {
        return this.UsersRepository.findOne({username: name})
    }

    async findUserById(id: number): Promise<Users> {
        return this.UsersRepository.findOne(id)
    }

    async addFavorite(name: string, title: string, cover_image:string): Promise<void> {
        const favData = await this.UsersRepository.findOne({username:name})
        await this.connection.createQueryBuilder()
           .update(Users)
           .set({
               favorite: [...favData.favorite, {title, cover_image}]
           })
           .where('username = :name', {name})
           .execute() 
    }

    async addUser(user: Object): Promise<void> {
        await this.UsersRepository.save(user)
    }

}
