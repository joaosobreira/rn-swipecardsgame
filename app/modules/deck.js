//decks.js

// actions
//export const REPLACE_ACTIVE_DECK = 'REPLACE_ACTIVE_DECK'
//export const REPLACE_ACTIVE_CARD = 'REPLACE_ACTIVE_CARD'
export const RESET_DECK = 'RESET_DECK'
export const SHUFFLE_DECK = 'SHUFFLE_DECK'
export const SKIP_CARD = 'SKIP_CARD'
export const GUESS_CARD = 'GUESS_CARD'
export const CHOOSE_DECK = 'CHOOSE_DECK'

// utils
function _shuffle(initialDeck) {
    for (let i = initialDeck.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [initialDeck[i - 1], initialDeck[j]] = [initialDeck[j], initialDeck[i - 1]];
    }
}

// action Creators
export function skipCard(newActiveCard){
  return {
    type: SKIP_CARD,
    payload: newActiveCard
  }
}

export function guessCard(){
  return {
    type: GUESS_CARD,
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
  return {type: CHOOSE_DECK,
  payload: deck}
}



// sagas



// selectors


// reducers
const initialState = {
  baseDeck: [],
  activeDeck: [],
  currentCard: {}
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
      case CHOOSE_DECK:
        return {
          ...state,
          baseDeck: action.payload,
          activeDeck: action.payload.slice(1,action.payload.length),
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
      case RESET_DECK:
        return {
          ...state,
          activeDeck: JSON.parse(JSON.stringify(state.baseDeck)),
          currentCard: JSON.parse(JSON.stringify(state.baseDeck)).slice(0,1)[0]
        };
      default:
        return state;
  }
}
