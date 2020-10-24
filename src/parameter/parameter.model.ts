import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Parameter {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tag: string;

    @Column()
    name: string;

    @Column()
    isAdmin: boolean;

    @CreateDateColumn({type:'timestamp'})
    createdAt: Date;

}