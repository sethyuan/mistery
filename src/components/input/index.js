import { h, Component, span, Text } from "ink"
import TextInput from "ink-text-input"

export default class Input extends Component {
  render() {
    const { onSubmit, onEnd, ...attrs } = this.props

    return (
      <span>
        <Text red>» </Text>
        <TextInput {...attrs} onSubmit={this.onSubmit} />
      </span>
    )
  }

  onSubmit = (v) => {
    const { onSubmit, onEnd } = this.props
    if (onSubmit) onSubmit(v)
    if (onEnd) onEnd()
  }
}
