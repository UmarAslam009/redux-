import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import nameReducer from './reducer/nameReducer';
import wishReducer from './reducer/wishReducer';
const masterReducer=combineReducers({
    name:nameReducer,
    wish:wishReducer
})
const store=createStore(masterReducer,{name:"umar",wish:["eat","sleep"]},applyMiddleware(thunk));
ReactDOM.render( <Provider store={store}>< App / > </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();