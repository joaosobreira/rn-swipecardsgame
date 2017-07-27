/*
Action Types
*/

export const ADD_TEAM = 'ADD_TEAM'
export const ADD_PLAYER_TO_TEAM = 'ADD_PLAYER_TO_TEAM'
export const EDIT_TEAM_NAME = 'EDIT_TEAM_NAME'
export const EDIT_PLAYER_NAME = 'EDIT_PLAYER_NAME'
export const GO_TO_NEXT_PLAYER = 'GO_TO_NEXT_PLAYER'
export const GO_TO_NEXT_TEAM = 'GO_TO_NEXT_TEAM'
export const ADD_POINT_TO_ACTIVE_TEAM = 'ADD_POINT_TO_ACTIVE_TEAM'



/*
Action Creators
*/

export function addTeam(){
  return {type: ADD_TEAM}
}

export function addPlayerToTeam(){
  return {type: ADD_PLAYER_TO_TEAM}
}

export function editTeamName(){
  return {type: EDIT_TEAM_NAME}
}

export function editPlayerName(){
  return {type: EDIT_PLAYER_NAME}
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
