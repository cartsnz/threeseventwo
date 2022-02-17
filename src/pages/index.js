import * as React from "react"
import Layout from "../components/layout"
import PlaceholderImage from "../components/placeholderImage"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
       <PlaceholderImage height="500px" width="100%" />
       <br />
       <PlaceholderImage height="500px" width="100%" />
       <br />
       <PlaceholderImage height="500px" width="100%" />
    </Layout>
  )
}

export default IndexPage
