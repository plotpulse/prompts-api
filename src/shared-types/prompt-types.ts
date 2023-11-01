import { IProfile } from "./user-types";

export interface IPrompt {
    id: number;
    content: string;
    replies?: IReply[];
    user: IProfile;
    stars?: IStar[];
    genres: string[];
    created?: string | Date;
}

export interface IReply {
    id: number;
    response: string;
    prompt?: IPrompt;
    user: IProfile;
    created?: string | Date;
}

export interface IStar {
    id: number;
    user?: IProfile; 
    prompt?: IPrompt;
    created?: string | Date;
}