import { createStore, combineReducers } from "redux"

import game from "game/reducers"

const store = createStore(
  combineReducers({
    game
  })
)

export const dispatch = store.dispatch.bind(store)

export default store
