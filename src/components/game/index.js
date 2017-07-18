import { h, Component } from "ink"
import Sequence from "components/sequence"
import Group from "components/group"
import Art from "components/art"
import Line from "components/line"
import * as arts from "libs/arts"

export default class Game extends Component {
  render() {
    const { onEnd } = this.props

    return (
      <Group onEnd={onEnd}>
        <Art text={arts.gameName} />
        <Sequence>
          <Line text="Hey ya!" />
          <Line text="Oh my!" />
        </Sequence>
      </Group>
    )
  }
}
