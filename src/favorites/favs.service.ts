import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { favs } from "./favs.entity";

@Injectable()
export class favService{
    constructor(
        @InjectRepository(favs)
        private favRepository: Repository<favs>
    ){}

    findAll(): Promise<favs[]> {
        return this.favRepository.find()
    }

    findOne(id:string): Promise<favs> {
        return this.favRepository.findOne(id)
    }

    async delete(id:string): Promise<void> {
        await this.favRepository.delete(id)
    }

    async add(favorite): Promise<void> {
        await this.favRepository.save(favorite)
    }
}