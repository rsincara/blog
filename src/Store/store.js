import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "../Reducers/rootReducer";
import logger from "redux-logger";

export const store = createStore(rootReducer, applyMiddleware(logger))
