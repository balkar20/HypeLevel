export const GET_NEWS = 'GET_NEWS'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export function getNews(id) {
    return { type: GET_NEWS, id }
  }
  
  export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
  }
  
  export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
  }