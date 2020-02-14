import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { SEO, Card } from "../components"

class BlogPost extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata
    // const { previous, next } = this.props.pageContext
    // const { title, description, date } = this.props.frontmatter

    return (
      <div className="container-blog">
        <SEO title={siteTitle} />
        <h1>
          {post.frontmatter.title}
        </h1>
        <i>
          {post.frontmatter.description}
        </i>
        <small>
          {post.frontmatter.date}
        </small>
        <MDXRenderer>{post.body}</MDXRenderer>
        <Card />
      </div>
    )
  }
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
