import {combineReducers} from "redux";
import newReduce from "./newsReducers";


const allReducers = combineReducers({
    news: newReduce
})

export default allReducers;