//decks.js

// actions
//export const REPLACE_ACTIVE_DECK = 'REPLACE_ACTIVE_DECK'
//export const REPLACE_ACTIVE_CARD = 'REPLACE_ACTIVE_CARD'
import { call, put, takeEvery, select } from 'redux-saga/effects'
import {GOTO_NEXT_ROUND} from '../modules/session'

export const SHUFFLE_DECK = 'SHUFFLE_DECK'
export const SKIP_CARD = 'SKIP_CARD'
export const GUESS_CARD = 'GUESS_CARD'
export const GUESS_CARD_ASYNC = 'GUESS_CARD_ASYNC'
export const CHOOSE_DECK = 'CHOOSE_DECK'

// utils
function _shuffle(initialDeck) {
    var array = [].concat(initialDeck);
    for (let i = array.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
    return array
}

// action Creators
export function skipCard(newActiveCard){
  return {
    type: SKIP_CARD,
    payload: newActiveCard
  }
}

export function resetDeck(newActiveCard){
  return {type: RESET_DECK,
  payload: newActiveCard}
}

export function shuffleDeck(newActiveCard){
  return {type: SHUFFLE_DECK,
  payload: newActiveCard}
}

export function chooseDeck(deck){
  console.log('Shuffling...')
  let shuffledDeck = _shuffle(deck);
  console.log('Shuffled! New Deck: ',shuffledDeck)
  return {
    type: CHOOSE_DECK,
    payload: shuffledDeck
  }
}



// sagas

// Workers sagas

export function* guessCardSaga() {
  const lenght = yield select(getDeckLenght);
  if((lenght-1)!=0)
    yield put({type: "GUESS_CARD"});
  else {
    const baseDeck = yield select(getBaseDeck);
    console.log('Calling inside guessCardSaga with lenght==0 and baseDeck: ',baseDeck)
    console.log('Shuffling...')
    let shuffledDeck = _shuffle(baseDeck);
    console.log('Shuffled! New Deck: ',shuffledDeck)
    yield put({type: GOTO_NEXT_ROUND, payload: shuffledDeck})
  }
}

//Watcher sagas
export function* watchForGuessCard() {
  yield takeEvery(GUESS_CARD_ASYNC, guessCardSaga);
}


// selectors
export const getDeckLenght = state => (state.deck.activeDeck.length+1)
export const getBaseDeck = state => state.deck.baseDeck


// reducers
const initialState = {
  baseDeck: [],
  activeDeck: [],
  currentCard: {},
  numberOfCard: 20
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
      case CHOOSE_DECK:
        return {
          ...state,
          baseDeck: action.payload,
          activeDeck: action.payload.slice(1,state.numberOfCard),
          currentCard: action.payload.slice(0,1)[0]
        };
      case GUESS_CARD:
        return {
          ...state,
          activeDeck: state.activeDeck.slice(1,state.activeDeck.length),
          currentCard: state.activeDeck.slice(0,1)[0]
        };
      case SKIP_CARD:
        return {
          ...state,
          activeDeck: [...state.activeDeck.slice(1,state.activeDeck.length),state.currentCard],
          currentCard: state.activeDeck.slice(0,1)[0]
        };
      case GOTO_NEXT_ROUND:
        return {
          ...state,
          activeDeck: (JSON.parse(JSON.stringify(action.payload))).slice(1,action.payload.length),
          currentCard: JSON.parse(JSON.stringify(action.payload)).slice(0,1)[0]
        };
      default:
        return state;
  }
}
