import { h, Component, Text, span } from "ink"
import Input from "ink-text-input"
import timer from "hocs/timer"

@timer
export default class Line extends Component {
  static defaultProps = {
    playSpeed: 70,
    retToggleSpeed: 500,
    who: "",
    text: "",
  }

  state = {
    whoInd: 1,
    textInd: 1,
    showRet: true,
  }

  render() {
    const { who, text, whoStyles, onEnd } = this.props
    const { whoInd, textInd, showRet } = this.state

    return (
      <span>
        {who
          ? <Text {...whoStyles}>{who.substring(0, whoInd)}</Text>
          : null
        }
        {text && whoInd > who.length
          ? text.substring(0, textInd)
          : null
        }
        {textInd > text.length
          ? <span>
              {showRet ? " ↩︎" : null}
              <Input onSubmit={this.onEnd} />
            </span>
          : null
        }
      </span>
    )
  }

  componentDidMount() {
    this.next()
  }

  componentDidUpdate(prevProps, prevState) {
    this.next()
  }

  next = () => {
    const { who, text, playSpeed, setTimeout, retToggleSpeed } = this.props
    const { whoInd, textInd, showRet} = this.state

    if (whoInd <= who.length) {
      setTimeout(() => {
        this.setState({ whoInd: whoInd + 1 })
      }, playSpeed)
    } else if (textInd <= text.length) {
      setTimeout(() => {
        this.setState({ textInd: textInd + 1 })
      }, playSpeed)
    } else {
      setTimeout(() => {
        this.setState({ showRet: !showRet })
      }, retToggleSpeed)
    }
  }

  onEnd = () => {
    this.setState({
      whoInd: 1,
      textInd: 1,
      showRet: true,
    })
    if (this.props.onEnd) this.props.onEnd()
  }
}
