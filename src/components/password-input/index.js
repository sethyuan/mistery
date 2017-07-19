import { h, Component, span, Text } from "ink"
import PasswordInput from "ink-password-input"

export default class Input extends Component {
  render() {
    const { onSubmit, onEnd, ...attrs } = this.props

    return (
      <span>
        <Text red>» </Text>
        <PasswordInput {...attrs} onSubmit={this.onSubmit} />
      </span>
    )
  }

  onSubmit = (v) => {
    const { onSubmit, onEnd } = this.props
    if (onSubmit) onSubmit(v)
    if (onEnd) onEnd()
  }
}
