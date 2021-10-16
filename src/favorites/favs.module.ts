import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ApiController } from "src/api/api.controller";
import { favs } from "./favs.entity";
import { favService } from "./favs.service";

@Module({
    imports: [TypeOrmModule.forFeature([favs])],
    providers: [favService],
    controllers: [ApiController],
    exports: [TypeOrmModule, favService]
})

export class favModule{}
