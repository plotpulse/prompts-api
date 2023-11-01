import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    ManyToOne,
    CreateDateColumn,
} from "typeorm";

import { IStar } from '../shared-types'
import { Prompt } from "./Prompt";
import { Profile } from "./Profile"


@Entity()
export class Star implements IStar {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Profile)
    @JoinColumn()
    user: Profile; 

    @ManyToOne(() => Prompt, {
        cascade: true
    })
    @JoinColumn()
    prompt: Prompt

    @CreateDateColumn()
    created: Date;


}