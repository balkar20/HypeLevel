import {RECIEVE_NEWS, REQUEST_NEWS} from "../constants/ActionTypes"

export const newsActionCreators = {
    requestNews: id  => async dispatch => {
        console.log("HI from request news");
        const url = `api/News/GetNews?id=${id}`;
        const response = await fetch(url);
        const news = await response.json();

        console.log(news);
    
        dispatch({ type: RECIEVE_NEWS, news: news});
    }

    
}