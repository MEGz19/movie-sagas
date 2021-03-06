import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects'
import axios from 'axios';

//SAGAS
// Create the rootSaga generator function
// this is the saga that will watch for actions
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('SELECT_MOVIE_ID', selectMoviesId);
}

// Select movie by id
function* selectMoviesId(action) {
    console.log(`In 'SELECT_MOVIE_ID' Saga`);
    let response = yield axios.get(`/movies/details/${action.payload}`)
    yield put ({ type: 'SELECT_MOVIE', payload: response.data[0]})
    
}

function* getMovies() {
    console.log(`In 'GET_MOVIES' Saga`);
    let response = yield axios.get(`/movies`)
    // "yield put" is the same as dispatch
    // it calls on reducer with the action.type of 'SET_MOVIES'
    yield put({ type: 'SET_MOVIES', payload: response.data });
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// REDUCERS
// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store selected movie by id on Home.jsx
const currentMovie = (state = 0, action) => {
    switch (action.type) {
        case 'SELECT_MOVIE':
            return action.payload;
        default:
            return state;    
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        currentMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
