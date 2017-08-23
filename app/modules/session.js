// sessions.js

// actions
export const DO_TICK_TIMER = 'DO_TICK_TIMER'
export const RESTART_TIMER = 'RESTART_TIMER'
export const GOTO_NEXT_ROUND = 'GOTO_NEXT_ROUND'
export const SWITCH_TIMER_STATUS = 'SWITCH_TIMER_STATUS'
export const START_TIMER = 'START_TIMER'
export const STOP_TIMER = 'STOP_TIMER'
export const END_ROUND = 'END_ROUND'
export const SET_SESSION_TIME_PER_PLAYER = 'SET_SESSION_TIME_PER_PLAYER'

export const CARDS_MODE_TEXT = 'CARDS_MODE_TEXT'
export const CARDS_MODE_SWIPE = 'CARDS_MODE_SWIPE'

const ON = 'ON'
const OFF = 'OFF'

// action Creators
export function goToNextRound(){
  return {type: GOTO_NEXT_ROUND}
}

export function doTickTimer(){
  return {type: DO_TICK_TIMER}
}

export function restartTimer(){
  return {type: RESTART_TIMER}
}

export function switchTimerStatus(){
  return {type: SWITCH_TIMER_STATUS}
}

export function startTimer(){
  return {type: START_TIMER}
}

export function stopTimer(){
  return {type: STOP_TIMER}
}

export function setSessionTimePerPlayer(timePerPlayer){
  return {
    type: SET_SESSION_TIME_PER_PLAYER,
    payload: timePerPlayer
  }
}


// sagas



// selectors
export const getTimeLeft = (state) => state.session.timeLeft
export const getTimerStatus = (state) => state.session.timerStatus
export const getRound = (state) => state.session.round


// reducers
const initialState = {
  timePerPlayer: 30,
  timerStatus: OFF,
  round: 1,
  cardsMode: CARDS_MODE_SWIPE
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GOTO_NEXT_ROUND:
      return {
        ...state,
        round: state.round+1
      };
    case START_TIMER:
      return {
        ...state,
        timerStatus: ON
      };
    case STOP_TIMER:
      return {
        ...state,
        timerStatus: OFF
      };
    case SET_SESSION_TIME_PER_PLAYER:
      return {
        ...state,
        timePerPlayer: action.payload
      };
    default:
      return state;
  }
}
