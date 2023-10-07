import { IUserProfile } from "./user-types";

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
    user: IUserProfile; 
    prompt: IPrompt;
}