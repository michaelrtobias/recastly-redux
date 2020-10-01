import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';


export default createStore(
  rootReducer,
  {currentVideo: exampleVideoData[0], videoList: exampleVideoData},
  applyMiddleware(thunk)
);