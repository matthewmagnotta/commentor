import { combineReducers } from "@reduxjs/toolkit";

import viewReducer, { name as viewName } from "store/slices/view";
import commentReducer from "store/slices/comments";
//I can not figure out why I cant change the name to something other than counter
const rootReducer = combineReducers({
  [viewName]: viewReducer,
  counter: commentReducer,
});

export default rootReducer;
