import { combineReducers } from "redux";
import loggedReducer from "./isLogged";
import counterReducer from "./counter";

const allReducers = combineReducers({
  logged: loggedReducer,
  counter: counterReducer,
});

export default allReducers;
