import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    PrimaryColumn,
    Unique,
} from "typeorm";

import { IProfile } from "../shared-types";

@Entity()
@Unique(["displayName"])
export class Profile implements IProfile {
    @PrimaryColumn()
    id: string;

    @Column("text")
    bio?: string;

    @Column()
    displayName: string;

    @Column()
    details?: string;

    @Column("simple-array")
    genres?: string[];

    @Column("simple-array")
    roles?: string[];

}