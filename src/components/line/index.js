import { h, Component, Text, div, span } from "ink"
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
    const { text, whoStyles, onEnd } = this.props
    const { whoInd, textInd, showRet } = this.state
    const who = this.props.who && `${this.props.who}: `

    return (
      <div>
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
    const { text, playSpeed, setTimeout, retToggleSpeed } = this.props
    const { whoInd, textInd, showRet} = this.state
    const who = this.props.who && `${this.props.who}: `

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
