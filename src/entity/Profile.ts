import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    PrimaryColumn,
} from "typeorm";

import { IProfile } from "../shared-types";

@Entity()
export class Profile implements IProfile {
    @PrimaryColumn()
    id: string;

    @Column()
    genres: string[];

    @Column("text")
    bio: string;

}