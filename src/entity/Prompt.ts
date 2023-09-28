import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

import { Reply } from "./Reply";

export interface IPrompt {
    id: number,
    content: string,
   

}

@Entity()
export class Prompt implements IPrompt {

    @PrimaryGeneratedColumn()
    id: number

    @Column("text")
    content: string

    @OneToMany(() => Reply, (reply) => reply.prompt)
    replies: Reply[];

}