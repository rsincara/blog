import {combineReducers} from "redux";
import {themeReducer} from "./themeReducer";
import {articleReducer} from "./createArticleReducer";

export const rootReducer = combineReducers({
    theme:themeReducer,
    articles:articleReducer
})
