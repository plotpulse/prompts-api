import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  CreateDateColumn,
} from "typeorm";

import { IReply } from "../shared-types";
import { Prompt } from "./Prompt";
import { Profile } from "./Profile";


@Entity()
export class Reply implements IReply {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  response: string;

  @ManyToOne(() => Prompt, (prompt) => prompt.replies)
  prompt: Prompt;

  @ManyToOne(() => Profile)
  user: Profile

  @CreateDateColumn()
  created: Date;
}
