import { ActionAuth } from "../actions";
import { ActionType } from "../action-types";

export default (state=false,action:ActionAuth):boolean=>{

    switch (action.type) {
        case ActionType.AUTH:
            return action.payload
        default:
            return state;
    }

}