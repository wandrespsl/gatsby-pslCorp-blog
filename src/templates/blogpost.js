import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { SEO, Card } from "../components"

class BlogPost extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata
    
    return (
      <div className="container-blog">
        <SEO title={siteTitle} />
        <h1>
          <Link to="/blog/">
            {post.frontmatter.title}
          </Link>
        </h1>
        <i>{post.frontmatter.description}</i>
        <small>{post.frontmatter.date}</small>
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
