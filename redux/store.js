import { createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";

const reducers = combineReducers({ counterReducer });
const store = createStore(reducers);

export default store;
