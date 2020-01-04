import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

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
}

function * getGenre (action) {
  const response = yield axios.get('/genre');
  yield put({type: 'SET_GENRE', payload: response.data});
}


//-----< REDUCERS >-----\\
const genreReducer = (state=[],action)=> {
  switch(action.type) {
    case 'SET_GENRE': return action.payload;
    default: return state;
  }
}

//-----< CREATING THE STORE >-----\\
const sagaMiddlware = createSagaMiddleware();
const storeInstance = createStore (
  combineReducers({
    genreReducer
  }),
  applyMiddleware(sagaMiddlware, logger)
)
sagaMiddlware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

