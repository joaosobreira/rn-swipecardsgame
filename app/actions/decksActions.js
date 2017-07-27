/*
Action Types
*/

export const REPLACE_ACTIVE_DECK = 'REPLACE_ACTIVE_DECK'
export const REPLACE_ACTIVE_CARD = 'REPLACE_ACTIVE_CARD'



/*
Action Creators
*/

export function replaceActiveDeck(){
  return {type: REPLACE_ACTIVE_DECK}
}

export function replaceActiveCard(){
  return {type: REPLACE_ACTIVE_CARD}
}
