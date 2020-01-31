import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Card from "../components/Card"

import { Card, SEO, Layout, Section } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <h1>PSLCorp - blog</h1>
    </Section>
    StyledSection
    <Link to="/blog/">Go PSLCorp blog</Link>
    <Card />
  </Layout>
)

export default IndexPage
