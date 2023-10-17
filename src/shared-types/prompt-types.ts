import { IProfile } from "./user-types";

export interface IPrompt {
    id: number;
    content: string;
    replies?: IReply[];
    user: IProfile;
    likes?: ILike[];
}

export interface IReply {
    id: number;
    response: string;
    prompt: IPrompt;
    user: IProfile
}

export interface ILike {
    id: number;
    user: IProfile; 
    prompt: IPrompt;
}