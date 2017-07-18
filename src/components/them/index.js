import Line from "components/Line"
import { connect } from "ink-redux"

export default connect(() => ({
  whoStyles: {
    yellow: true,
    bold: true,
  }
}))(Line)
