export const SET_PLAYER_NAME = "GAME_SET_PLAYER_NAME"

export function setPlayerName(name) {
  return {
    type: SET_PLAYER_NAME,
    name,
  }
}
