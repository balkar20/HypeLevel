import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as newsReducers from "./reducers/newsReducers";
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';


// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });
const middleware = [
    thunk,
    routerMiddleware(history)
];
const reducers = {
  newsReducer: newsReducers.newsReducer, 
};

 // In development, use the browser's Redux dev tools extension if installed
 const enhancers = [];
 const isDevelopment = process.env.NODE_ENV === 'development';
 if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
   enhancers.push(window.devToolsExtension());
 }

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

// Get the application-wide store instance, prepopulating with state from the server where available.
//const initialState = window.initialReduxState;


const store = createStore(rootReducer, 
  compose(applyMiddleware(...middleware), ...enhancers));
console.log(store.getState()) ;

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootElement);

registerServiceWorker();
