import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

export default class extends React.Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    const { data } = this.props
    const file = data.allFile.edges.find(
      x =>
        x.node.sourceInstanceName === "coffeescript-breakout" &&
        x.node.base === "index.js"
    )
    return (
      <>
        <Helmet>
          <script src={file.node.publicURL} />
        </Helmet>
        <canvas id="coffeescript-breakout" width="300" height="300" />
      </>
    )
  }
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          base
          sourceInstanceName
          publicURL
        }
      }
    }
  }
`
