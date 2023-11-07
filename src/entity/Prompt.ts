import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  Relation,
  OneToOne,
  CreateDateColumn,
} from "typeorm";

import { IPrompt } from "../shared-types";
import { Reply } from "./Reply";
import { Profile } from "./Profile";
import { Star } from "./Star"



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

  @OneToMany(() => Star, (star) => star.prompt)
  stars: Star[];

  @ManyToOne(() => Profile)
  user: Profile;

  @Column("simple-array")
  genres: string[];

  @CreateDateColumn()
  created: Date;

}
