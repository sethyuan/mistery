import update from "immutability-helper"
import {
  SET_PLAYER_NAME,
} from "game/actions"

const initialState = {
  playerName: "",
}

const handlers = {
  [SET_PLAYER_NAME](state, { name }) {
    return update(state, {
      playerName: { $set: `${name}` }
    })
  },
}

export default function app(state = initialState, action) {
  const type = action.type
  if (!handlers[type]) return state
  return handlers[type](state, action)
}
