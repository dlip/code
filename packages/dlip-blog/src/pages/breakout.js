import React from "react"
import Breakout from "coffeescript-breakout"

export default class extends React.Component {
  shouldComponentUpdate() {
    return false
  }
  componentDidMount() {
    const breakout = new Breakout(this.refs._canvas)
    breakout.run()
  }
  render() {
    return <canvas ref="_canvas" width="300" height="300" />
  }
}
