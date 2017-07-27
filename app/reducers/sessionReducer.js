import {DO_TICK_TIMER, RESTART_TIMER, GOTO_NEXT_ROUND, SWITCH_TIMER_STATUS} from '../actions/sessionActions';

const INITIAL = {
  timeLeft: 10,
  timerStatus: 'STOP',
  round: 1
}

export default (state = INITIAL, action) => {
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
