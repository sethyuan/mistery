import { h, Component } from "ink"

export default class Group extends Component {
  state = {
    ind: 1,
  }

  render() {
    const { children } = this.props
    const { ind } = this.state
    const comps = children.slice(0, ind)
    comps[comps.length - 1].props.onEnd = this.next

    return (
      <div>
        {comps}
      </div>
    )
  }

  next = () => {
    const { children, onEnd } = this.props
    const { ind } = this.state

    if (ind < children.length) {
      this.setState({ ind: ind + 1 })
    } else {
      if (onEnd) onEnd()
    }
  }
}
