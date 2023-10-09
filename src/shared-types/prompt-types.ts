import { IProfile } from "./user-types";

export interface IPrompt {
    id: number;
    content: string;
    replies?: IReply[];
}

export interface IReply {
    id: number;
    response: string;
    prompt: IPrompt;
}

export interface ILike {
    id: number;
    user: IProfile; 
    prompt: IPrompt;
}