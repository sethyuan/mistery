import Line from "components/Line"
import { connect } from "ink-redux"

export default connect(({ game }) => ({
  who: game.playerName,
  whoStyles: {
    blue: true,
    bold: true,
    italic: true,
  }
}))(Line)
