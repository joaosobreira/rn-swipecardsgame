import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import currentGame from './currentGame';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers(
  {
    currentGame,
    sessionReducer
  }
)

export const store = createStore(
  rootReducer,
  {}
)
