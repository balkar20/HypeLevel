import {createStore} from "redux";


function news(state = []){
    return state;
}

const store = createStore(news);

store.subscribe(() => {
    console.log("subscribe", store.getState())
});

export default store;