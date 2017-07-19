import { h, Component, span, Text } from "ink"
import Spinner from "ink-spinner"
import timer from "hocs/timer"

@timer
export default class WaitLine extends Component {
  render() {
    const { text } = this.props

    return (
      <span>
        <Spinner blue /> {text}
      </span>
    )
  }

  componentDidMount() {
    this.runTimer()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.text !== nextProps.text) {
      this.runTimer()
    }
  }

  runTimer = () => {
    const { setTimeout, duration, onEnd } = this.props
    setTimeout(() => {
      if (onEnd) onEnd()
    }, duration * 1000)
  }
}
