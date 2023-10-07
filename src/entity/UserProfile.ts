import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm";

import { IUserProfile } from "../shared-types/";

@Entity()
export class UserProfile implements IUserProfile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    auth0: number;

    @Column()
    genres: string[];

    @Column("text")
    bio: string;

}