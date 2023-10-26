import { IProfile } from "./user-types";

export interface IPrompt {
    id: number;
    content: string;
    replies?: IReply[];
    user: IProfile;
    stars?: IStar[];
    genres: string[];
}

export interface IReply {
    id: number;
    response: string;
    prompt: IPrompt;
    user: IProfile;
}

export interface IStar {
    id: number;
    user: IProfile; 
    prompt: IPrompt;
}