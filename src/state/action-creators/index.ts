import { Action, ActionAuth } from "../actions"
import { ActionType } from "../action-types"
import axios from 'axios';
import { Dispatch } from "react";

export const createComment=(comment:string):Action=>{
    return {
        type:ActionType.CREATE_COMMENT,
        payload:comment
    }
}

export const fetchComments=()=> async (dispatch:Dispatch<Action>)=>{
   const {data}=await axios.get('http://jsonplaceholder.typicode.com/comments');
   const commentNames=data.map((comment:any)=>comment.name)
   dispatch({type:ActionType.FETCH_COMMENTS,payload:commentNames})

}


export const auth=(isAthu:boolean):ActionAuth=>{
    return {
        type:ActionType.AUTH,
        payload:isAthu
    }
}

