import React from "react"
import { SEO, Card, Header } from "../components"
import { Button } from "../styles/components"
import { Link } from "gatsby"

export default function blog() {
  return (
    // <Layout>
    <div>
      <SEO title="Blog PSL" />
      <Header siteTitle="PSLCorp blog.." />
      <Card />
      <div>Header</div>
      <div>Body</div>
      <Link to="/">
        <Button type="outline">PSL</Button>
      </Link>
    </div>
    // </Layout>
  )
}
