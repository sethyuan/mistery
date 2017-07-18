import { h, render, Component } from "ink"
import { Provider } from "ink-redux"
import store from "store"
import Game from "components/game"

const App = () => (
  <Provider store={store}>
    <Game onEnd={() => unmount()} />
  </Provider>
)

const unmount = render(<App />)
