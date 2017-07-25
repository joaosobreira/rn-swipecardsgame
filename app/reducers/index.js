import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import currentGame from './currentGame';

const rootReducer = combineReducers(
  {
    currentGame
  }
)

export const store = createStore(
  rootReducer,
  {}
)
