import { combineReducers } from "redux";
import user from './user';
import postReducer from './post';
import image from "./image";

const rootReducer = combineReducers({
  user,
  postReducer,
  image,
})


export default rootReducer;