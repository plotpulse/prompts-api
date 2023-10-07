import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";

import { IReply } from "../shared-types";
import { Prompt } from "./Prompt";


@Entity()
export class Reply implements IReply {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  response: string;

  @ManyToOne(() => Prompt, (prompt) => prompt.replies)
  prompt: Prompt;
}
