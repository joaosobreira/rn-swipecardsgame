import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import currentGame from './currentGame';
import sessionReducer from './sessionReducer';
import deck from '../modules/deck'
import session from '../modules/session'
import teams from '../modules/teams'
import createSagaMiddleware from 'redux-saga'
import {watchForGuessCard} from '../modules/deck'

const rootReducer = combineReducers(
  {
    deck: deck,
    teams: teams,
    session: session
  }
)

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(watchForGuessCard)
