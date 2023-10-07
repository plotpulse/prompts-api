import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm";

import { ILike } from '../shared-types'
import { Prompt } from "./Prompt";
import { UserProfile } from "./UserProfile"


@Entity()
export class Like implements ILike {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserProfile)
    @JoinColumn()
    user: UserProfile; 

    @OneToOne(() => Prompt)
    @JoinColumn()
    prompt: Prompt


}