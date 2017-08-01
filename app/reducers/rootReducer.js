import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import currentGame from './currentGame';
import sessionReducer from './sessionReducer';
import deck from '../modules/deck'
import session from '../modules/session'
import teams from '../modules/teams'

const rootReducer = combineReducers(
  {
    deck: deck,
    teams: teams,
    session: session
  }
)

export const store = createStore(
  rootReducer,
  {}
)
