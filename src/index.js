import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//Redux + Saga
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {put,takeEvery} from 'redux-saga/effects';
import axios from 'axios';

//-----< SAGAS >-----\\
function * rootSaga () {
  yield takeEvery ('GET_GENRE', getGenre); 
  yield takeEvery ('ADD_GENRE', addGenre);
  yield takeEvery ('DELETE_GENRE', deleteGenre);
  yield takeEvery ('GET_MOVIE', getMovie);
  yield takeEvery ('ADD_MOVIE', addMovie);
}

function * getGenre (action) {
  const response = yield axios.get('/genre');
  yield put({type: 'SET_GENRE', payload: response.data});
}

function * addGenre (action) {
  yield axios.post('/genre',{newGenre: action.payload});
  yield put({type: 'GET_GENRE'});
}

function * deleteGenre (action) {
  yield axios.delete('/genre/'+action.payload);
  yield put({type: 'GET_GENRE'});
}

function * getMovie (action) {
  const response = yield axios.get('/movie');
  yield put({type: 'SET_MOVIE', payload: response.data});
}

function * addMovie (action) {
  yield axios.post('/movie',action.payload);
  yield put({type: 'GET_MOVIE'});
}

//-----< REDUCERS >-----\\
const genreReducer = (state=[],action)=> {
  switch(action.type) {
    case 'SET_GENRE': return action.payload;
    default: return state;
  }
}

const movieReducer = (state=[],action)=> {
  switch(action.type) {
    case 'SET_MOVIE': return action.payload;
    default: return state;
  }
}

//-----< CREATING THE STORE >-----\\
const sagaMiddlware = createSagaMiddleware();
const storeInstance = createStore (
  combineReducers({
    genreReducer,
    movieReducer,
  }),
  applyMiddleware(sagaMiddlware, logger)
)
sagaMiddlware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

