import { Action } from "../actions";
import { ActionType } from "../action-types";


export interface CommentState{
    comments:string[];
}

const INITIAL_STATE={
    comments:[]
}

export default (state:CommentState=INITIAL_STATE,action:Action):CommentState=>{

    switch (action.type) {
        case ActionType.CREATE_COMMENT:
            
            return {comments:[...state.comments,action.payload]}
        case ActionType.FETCH_COMMENTS:
            return {comments:[...state.comments,...action.payload]}
    
        default:
            return state;
    }

}