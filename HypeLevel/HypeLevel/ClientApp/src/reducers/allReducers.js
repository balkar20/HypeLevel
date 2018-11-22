import {combineReducers} from "redux";
import {newReduce} from "./newsReducers";


const allReducers = combineReducers({
    news: []
})

export default allReducers;