import { combineReducers } from "redux";
import user from './user';
import postReducer from './post';

const rootReducer = combineReducers({
  user,
  postReducer,
})


export default rootReducer;