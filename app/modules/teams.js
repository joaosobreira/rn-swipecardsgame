import {GUESS_CARD} from './deck';
import {GOTO_NEXT_ROUND} from './session'

//teams.js

// actions
export const ADD_TEAM = 'ADD_TEAM'
export const ADD_PLAYER_TO_TEAM = 'ADD_PLAYER_TO_TEAM'
export const EDIT_TEAM_NAME = 'EDIT_TEAM_NAME'
export const EDIT_PLAYER_NAME = 'EDIT_PLAYER_NAME'
export const GO_TO_NEXT_PLAYER = 'GO_TO_NEXT_PLAYER'
export const GO_TO_NEXT_TEAM = 'GO_TO_NEXT_TEAM'
export const ADD_POINT_TO_ACTIVE_TEAM = 'ADD_POINT_TO_ACTIVE_TEAM'

// action Creators
export function addTeam(teamName){
  return {type: ADD_TEAM,
  payload: teamName
		}
}

export function addPlayerToTeam(teamName,newPlayerName){
  return {type: ADD_PLAYER_TO_TEAM,
	  payload: {
				team: teamName,
				playerName: newPlayerName
			}}
}

export function editTeamName(oldPlayerName, newPlayerName){
  return {
		type: EDIT_TEAM_NAME,
		payload: {
			old: oldTeamName,
			new: newTeamName
		}}
}

export function editPlayerName(oldPlayerName, newPlayerName){
  return {
		type: EDIT_PLAYER_NAME,
		payload: {
			old: oldPlayerName,
			new: newPlayerName
		}}
}

export function goToNextPlayer(){
  return {type: GO_TO_NEXT_PLAYER}
}

export function goToNextTeam(){
  return {type: GO_TO_NEXT_TEAM}
}

export function addPointToActiveTeam(){
  return {type: ADD_POINT_TO_ACTIVE_TEAM}
}


// sagas



// selectors
export const getPointsByTeam = (state, team) => state.teams[team].points


// reducers
const initialState = {
  activePlayer: 0,
  activeTeam: 0,
  teams: [
    {
      name: 'Team A',
      points: 0
    },
    {
      name: 'Team B',
      points: 0
    }
  ]
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
      case GUESS_CARD:
        return {
          ...state,
          //teams[activeTeam].points = state.teams[activeTeam].points+1
          teams: state.teams.map(
            (team, i) => i === state.activeTeam ?
            { ...team, points: state.teams[i].points+1 } :
            team
          )
        }
      case GO_TO_NEXT_TEAM:
      case GOTO_NEXT_ROUND:
        return {
          ...state,
          activeTeam: state.activeTeam==0 ? 1 : 0
        }
      default:
        return state;
  }
}
