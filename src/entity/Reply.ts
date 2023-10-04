import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import { Prompt } from "./Prompt";

export interface IReply {
  id: number;
  response: string;
}

@Entity()
export class Reply implements IReply {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  response: string;

  @ManyToOne(() => Prompt, (prompt) => prompt.replies)
  prompt: Prompt;
}
