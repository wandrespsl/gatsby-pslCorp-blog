import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Card from "../components/Card"

import { Card, SEO, Layout, Section } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    />
    <Link to="/blog/">Go PSLCorp blog</Link>
    <Card />
  </Layout>
)

export default IndexPage
