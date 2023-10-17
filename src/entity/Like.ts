import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    ManyToOne,
} from "typeorm";

import { ILike } from '../shared-types'
import { Prompt } from "./Prompt";
import { Profile } from "./Profile"


@Entity()
export class Like implements ILike {

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


}