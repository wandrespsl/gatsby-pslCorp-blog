import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Card from "../components/Card"

import { SEO, Section } from "../components"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Section
      style={{
        background: `red`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        backgroundPosition: `left top`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    />
    <Link to="/blog/">Go PSLCorp blog</Link>
  </>
)

export default IndexPage
