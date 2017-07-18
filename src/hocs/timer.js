import { h, Component } from "ink"

function getGlobal() {
  let g = undefined

  try {
    g = window
    return g
  } catch (e) {
    // ignore, try next
  }

  try {
    g = global
    return g
  } catch (e) {
    // ignore, try next
  }

  return g
}

const win = getGlobal()

export default function timer(Comp) {
  class Timer extends Component {
    constructor(props, context) {
      super(props, context)

      this.ids = {}
      this.methods = {}
      ;[
        ["setTimeout", "clearTimeout"],
        ["setInterval", "clearInterval"],
        ["setImmediate", "clearImmediate"],
        ["requestAnimationFrame", "cancelAnimationFrame"],
      ].forEach(([f, cf]) => {
        this.methods[f] = (...args) => {
          const id = win[f](...args)
          if (!this.ids[f]) {
            this.ids[f] = new Set()
          }
          this.ids[f].add(id)
          return id
        }

        this.methods[cf] = id => {
          win[cf](id)
          if (this.ids[f]) this.ids[f].delete(id)
        }
      })
    }

    render() {
      return <Comp {...this.props} {...this.methods} />
    }

    componentWillUnmount() {
      [
        ["setTimeout", "clearTimeout"],
        ["setInterval", "clearInterval"],
        ["setImmediate", "clearImmediate"],
        ["requestAnimationFrame", "cancelAnimationFrame"],
      ].forEach(([f, cf]) => {
        if (this.ids[f]) {
          this.ids[f].forEach(id => win[cf](id))
        }
      })
    }
  }
  return Timer
}
