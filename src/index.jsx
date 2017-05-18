import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import {Provider} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';

import Main from 'components/Main.jsx';
import {id} from 'states/all-reducers.js';
import {eachdog} from 'states/each-reducers.js';
import {main} from 'states/main-reducers.js';
import {postForm} from 'states/post-reducers.js';
import {
    forum,
    forumNavbar,
    forumForm,
    forumList,
    post,
    responseForm,
    responseList
} from 'states/forum-reducers.js';



window.onload = function() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(combineReducers({
        id,
        eachdog,
        main,
        postForm,
        forum,
        forumNavbar,
        forumForm,
        forumList,
        post,
        responseForm,
        responseList
    }), composeEnhancers(applyMiddleware(thunkMiddleware/*, loggerMiddleware*/)));


    ReactDOM.render(
        <Provider store = {store}>
            <Main />
        </Provider>
        ,
        document.getElementById('root')
    );
};
