import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  Relation,
  OneToOne,
} from "typeorm";

import { IPrompt } from "../shared-types";
import { Reply } from "./Reply";
import { Profile } from "./Profile";
import { Like } from "./Like"



@Entity()
export class Prompt implements IPrompt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  content: string;

  @OneToMany(() => Reply, (reply) => reply.prompt, {
    cascade: true,
    onDelete: "CASCADE",
  })
  replies: Reply[];

  @OneToMany(() => Like, (like) => like.prompt)
  likes: Like[];

  @ManyToOne(() => Profile)
  user: Profile
}
