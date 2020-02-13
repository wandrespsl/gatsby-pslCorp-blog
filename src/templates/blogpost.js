import React from "react"
import { graphql } from "gatsby"

import { SEO, Card } from "../components"

export default function BlogPost(props) {
  const post = props.data.markdownRemark
  const { title, description, date } = post.frontmatter
  return (
    <div className="container-blog">
      <SEO title="Blog PSL" />
      <h1>
        {title}
        <span class="hljs-name"></span>
      </h1>
      <i>
        {description}
        <span class="hljs-name"></span>
      </i>{" "}
      -{" "}
      <small>
        {date}
        <span class="hljs-name"></span>
      </small>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      <span class="hljs-name"></span>
      <Card />
    </div>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
      }
    }
  }
`