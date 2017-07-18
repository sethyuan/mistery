import { h, Component } from "ink"
import Sequence from "components/sequence"
import Group from "components/group"
import Art from "components/art"
import Line from "components/line"
import Them from "components/them"
import Me from "components/me"
import Input from "ink-text-input"
import * as arts from "libs/arts"
import { wang } from "libs/names"
import { connect } from "ink-redux"
import * as act from "game/actions"

@connect(
  ({ game }) => ({
    player: game.playerName,
  }),
  {
    setPlayerName: act.setPlayerName,
  },
)
export default class Game extends Component {
  render() {
    const { player, onEnd } = this.props

    return (
      <Group onEnd={onEnd}>
        <Art text={arts.gameName} />
        <Sequence>
          <Line text="....................................................." />
          <Them who="???: " text="....醒...醒..........醒........醒醒......" />
          <Line text="......你感觉到一道白光，很刺眼！" />
          <Line text="你慢慢地睁开了双眼。刚开始还感觉很模糊，不过很快你的视野遍清晰了起来。" />
          <Them who="???: " text="你终于醒了，老兄。你知道我们这是在什么地方吗？" />
          <Them who="???: " text={`啊，不好意思，还没有自我介绍，我叫 ${wang}。你叫什么名字？`} />
          <Input value={player} onChange={(v) => setPlayerName(v)} />
        </Sequence>
      </Group>
    )
  }
}
