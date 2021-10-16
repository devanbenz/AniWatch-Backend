import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class favs {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    cover_image: string
    
}