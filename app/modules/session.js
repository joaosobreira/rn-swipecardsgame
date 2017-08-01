// sessions.js

// actions
export const DO_TICK_TIMER = 'DO_TICK_TIMER'
export const RESTART_TIMER = 'RESTART_TIMER'
export const GOTO_NEXT_ROUND = 'GOTO_NEXT_ROUND'
export const SWITCH_TIMER_STATUS = 'SWITCH_TIMER_STATUS'
export const START_TIMER = 'START_TIMER'
export const STOP_TIMER = 'STOP_TIMER'

const STOPPED = 'STOPPED'
const RUNNING = 'RUNNING'

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


// sagas



// selectors


// reducers
const initialState = {
  timeLeft: 10,
  timerStatus: STOPPED,
  round: 1
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
        timerStatus: RUNNING
      };
      case STOP_TIMER:
        return {
          ...state,
          timerStatus: STOPPED
        };
      default:
        return state;
  }
}
