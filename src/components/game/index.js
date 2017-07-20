import { h, Component } from "ink"
import Sequence from "components/sequence"
import Group from "components/group"
import Art from "components/art"
import Line from "components/line"
import Them from "components/them"
import Me from "components/me"
import Input from "components/input"
import PasswordInput from "components/password-input"
import WaitLine from "components/wait-line"
import * as arts from "libs/arts"
import { wang, device } from "libs/names"
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
  state = {
    playerName: "",
    accessCode: "",
  }

  render() {
    const { player, setPlayerName, onEnd } = this.props
    const { playerName, accessCode } = this.state

    return (
      <Group onEnd={onEnd}>
        <Art text={arts.gameName} color="cyan" />
        <Sequence>
          <Line text="....................................................." />
          <Them who="???" text="....醒...醒..........醒........醒醒......" />
          <Line text="......你感觉到一道白光，很刺眼！" />
          <Line text="你慢慢地睁开了双眼。刚开始还感觉很模糊，不过很快你的视野遍清晰了起来。" />
          <Them who="???" text="你终于醒了，老兄。你知道我们这是在什么地方吗？" />
          <Them who="???" text={`啊，不好意思，还没有自我介绍，我叫${wang}。你叫什么名字？`} />
          <Input
            value={playerName}
            placeholder="你的名字……"
            onChange={(v) => this.setState({ playerName: v })}
            onSubmit={(v) => setPlayerName(v)}
          />
          <Them who={`${wang}`} text={`OK ${player}，打起精神来，我们得离开这个鬼地方了。`} />
          <Me text="这是哪里？我们为什么在这儿？我怎么什么都不记得了？！" />
          <Them who={`${wang}`} text="我和你一样也什么都不记得了，一醒来就看到你躺在旁边。" />
          <Them who={`${wang}`} text="这里看起来像是一个客厅一样的房间，不过门是锁住的，打不开。" />
          <Me text="不会吧，密室？我们找找看有没有什么线索。最好是能直接找到钥匙。" />
          <Them who={`${wang}`} text="那边桌子上有个奇怪的电子设备，不知道能不能找到有用的信息？" />
          <Line text="你们一起走到了设备前，它看起来真的和普通的电脑不同……你按下了开关键……" />
          <Group>
            <Art text={arts.device} color="gray" />
            <Sequence>
              <Them who={`${device}`} text="Welcome to Mistery!" />
              <Them who={`${device}`} text="Please type in the access code." />
              <PasswordInput
                value={accessCode}
                placeholder="access code..."
                onChange={(v) => this.setState({ accessCode: v })}
              />
              <WaitLine duration={0.8} text="Verifying access code..." />
              <WaitLine duration={1.5} text="Opening antennas..." />
              <WaitLine duration={1} text="Loading operating system..." />
              <WaitLine duration={0.5} text="Everything loaded..." />
              <Line text="设备上的显示屏闪了闪，变成了全白的显示......不，有内容显现出来了。它可能是离开这个房间的关键信息。" />
              <Line text="显示屏上到底出现了什么呢？两人能否离开这个怪异的房间呢？欲知后事如何......" />
              <Line text="赶紧到作者的Github上去star表示支持吧！😃 " />
            </Sequence>
          </Group>
        </Sequence>
      </Group>
    )
  }
}
