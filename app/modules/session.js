// sessions.js

// actions
export const DO_TICK_TIMER = 'DO_TICK_TIMER'
export const RESTART_TIMER = 'RESTART_TIMER'
export const GOTO_NEXT_ROUND = 'GOTO_NEXT_ROUND'
export const SWITCH_TIMER_STATUS = 'SWITCH_TIMER_STATUS'

// action Creators
export function doTickTimer(){
  return {type: DO_TICK_TIMER}
}

export function restartTimer(){
  return {type: RESTART_TIMER}
}

export function goToNextRound(){
  return {type: GOTO_NEXT_ROUND}
}

export function switchTimerStatus(){
  return {type: SWITCH_TIMER_STATUS}
}


// sagas



// selectors


// reducers
const initialState = {
  timeLeft: 10,
  timerStatus: 'STOP',
  round: 1
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GOTO_NEXT_ROUND:
      return {
        ...state,
        round: state.round+1
      };
      default:
        return state;
  }
}
