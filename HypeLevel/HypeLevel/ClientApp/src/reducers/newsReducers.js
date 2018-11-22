import {GET_NEWS} from "../actions/newsActions";


const initialState = {
    news: []
  };

  function newReduce(state = initialState, action){
      if(action.type === GET_NEWS){
          return [
              ...state,
              action.payload
        ];
      }
    
  }

  export default newReduce;

