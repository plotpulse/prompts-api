import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm";

import { ILike } from '../shared-types'
import { Prompt } from "./Prompt";
import { Profile } from "./Profile"


@Entity()
export class Like implements ILike {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Profile)
    @JoinColumn()
    user: Profile; 

    @OneToOne(() => Prompt)
    @JoinColumn()
    prompt: Prompt


}