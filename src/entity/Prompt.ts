import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Relation,
} from "typeorm";

import { IPrompt } from "../shared-types";
import { Reply } from "./Reply";



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
}
