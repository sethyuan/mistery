import { h, Component } from "ink"

export default class Sequence extends Component {
  state = {
    ind: 0,
  }

  render() {
    const { children } = this.props
    const { ind } = this.state
    const comp = children[ind]
    comp.props.onEnd = this.next

    return (
      <div>
        {[comp]}
      </div>
    )
  }

  next = () => {
    const { children, onEnd } = this.props
    const { ind } = this.state

    if (ind + 1 < children.length) {
      this.setState({ ind: ind + 1 })
    } else {
      if (onEnd) onEnd()
    }
  }
}
