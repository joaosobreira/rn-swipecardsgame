import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import currentGame from './currentGame';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers(
  {
    currentGame,
    session: sessionReducer
  }
)

export const store = createStore(
  rootReducer,
  {}
)
