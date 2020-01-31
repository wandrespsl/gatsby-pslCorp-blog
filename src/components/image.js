import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.fileName)
      })
      if (!image) {
        return null
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />
    }}
  />
)

// const data = useStaticQuery(graphql`
//   query {
//     placeholderImage: file(relativePath: { eq: "logo-psl-2019.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 112) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `)

// return (
//   <Img
//     fluid={data.placeholderImage.childImageSharp.fluid}
//     style={{
//       width: `7rem`,
//     }}
//   />
// )

export default Image
