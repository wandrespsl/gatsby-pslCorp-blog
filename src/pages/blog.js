import React from "react"
import { Link, graphql } from "gatsby"

import { StyledCard } from "../styles/components"
import { SEO } from "../components"
import { Button } from "../styles/components"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <>
        <SEO title={siteTitle} />
        <div className="container-blog">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <StyledCard key={node.fields.slug}>
                <div className="header-post">
                  <div className="col-cell cell-tight">
                    <div className="eb-post-avatar">Avatar</div>
                  </div>
                  <div className="col-cell">
                    <div className="eb-post-author">
                      <span>
                        <Link to="/">PSL Corp</Link>
                      </span>
                    </div>
                    <div className="eb-post-date text-muted">
                      <time className="eb-meta-date">
                        {node.frontmatter.date}
                      </time>
                    </div>
                  </div>
                </div>
                <div>
                  <h2>
                    <Link to={`blog${node.fields.slug}`}>{title}</Link>
                  </h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                  <Link to={`blog${node.fields.slug}`}>
                    <Button marginTop="85px">Continue reading</Button>
                  </Link>
                </div>
              </StyledCard>
            )
          })}
        </div>
      </>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
