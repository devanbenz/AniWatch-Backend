import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column("json", {nullable:true})
    public favorite!: {title: string, cover_image: string}[]
}