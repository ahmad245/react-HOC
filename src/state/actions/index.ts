import { ActionType } from "../action-types";

export interface CreateComment{
    type:ActionType.CREATE_COMMENT;
    payload:string;
}

export interface FetchComment{
    type:ActionType.FETCH_COMMENTS;
    payload:string[];
}

export interface Auth{
    type:ActionType.AUTH;
    payload:boolean
}

export type Action=CreateComment|FetchComment;
export type ActionAuth=Auth;