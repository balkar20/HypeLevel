import * as types from '../constants/ActionTypes';

const initialState = { news: [{name:"kolya"}, {name: "sasha"}], isLoading: false };

export const newsReducer =(state = initialState, action) => {
    state = state || initialState;
    if (action.type === types.CREATE_NEWS) {
        return {
            ...state,
            news: action.news
        };
    } else if (action.type === types.RECIEVE_NEWS) {
        console.log("news from reducer" , action.news);
        return {
            ...state,
            news: action.news,
            isLoading: false
        }
    } else if (action.type === types.REQUEST_NEWS) {
        return {
            ...state,
            isLoading: true
        }
    } else {
        return state;
    }
}

