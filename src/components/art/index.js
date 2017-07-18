import { h, Component, Text, div } from "ink"
import timer from "hocs/timer"

@timer
export default class Art extends Component {
  static defaultProps = {
    playSpeed: 70,
  }

  state = {
    ind: 1,
  }

  render() {
    const { text } = this.props
    const { ind } = this.state
    const lines = text.slice(0, ind)

    return (
      <div>
      {lines.map(line => (
        <div>
          <Text cyan>{line}</Text>
        </div>
      ))}
      </div>
    )
  }

  componentDidMount() {
    this.next()
  }

  componentDidUpdate(prevProps, prevState) {
    this.next()
  }

  next = () => {
    const { text, playSpeed, onEnd, setTimeout } = this.props
    const { ind } = this.state

    if (ind <= text.length) {
      setTimeout(() => {
        this.setState({ ind: ind + 1 })
      }, playSpeed)
    } else {
      if (onEnd) onEnd()
    }
  }
}
