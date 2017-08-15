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
export const SET_NUMBER_OF_TEAMS = 'SET_NUMBER_OF_TEAMS'

const defaultTeamNames = ["Team C", "Team D", "Team E", "Team F"];


// action Creators
export function addTeam(teamName){
  return {
    type: ADD_TEAM,
    payload: teamName
	}
}

export function setNumberOfTeams(numberOfTeams){
  let newTeams = []
  if(numberOfTeams>2){
    for(i = 0; i<(numberOfTeams-2); i++){
      newTeams.push({name: defaultTeamNames[i], points: 0})
    }
  }
  console.log('newTeams: ',newTeams)
  return {
    type: SET_NUMBER_OF_TEAMS,
    payload: newTeams
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
export const getActiveTeamName = (state) => state.teams[state.activeTeam].name
export const getNumberOfTeams = (state) => state.teams.length


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
        console.log(getNumberOfTeams(state))
        return {
          ...state,
          activeTeam: (state.activeTeam+1)%getNumberOfTeams(state)
        }
      case SET_NUMBER_OF_TEAMS:
        return {
          ...state,
          teams: state.teams.concat(action.payload)
        }
      default:
        return state;
  }
}
