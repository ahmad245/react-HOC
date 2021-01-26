import { combineReducers } from 'redux';
import commentsReducer from './commentReducer';
import  auth  from './authReducer';;

const reducers = combineReducers({
  comments: commentsReducer,
  auth:auth
});

export default reducers;

export type RootState=ReturnType<typeof reducers>;