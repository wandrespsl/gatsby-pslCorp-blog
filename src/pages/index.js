import React from "react"
import { Link } from "gatsby"

import { SEO, Section } from "../components"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Section bgimage="home-gradient" />
    <Link to="/blog">Go PSLCorp blog</Link>
  </>
)

export default IndexPage
