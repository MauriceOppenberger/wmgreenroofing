import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import LogoGalleryWrapper from "./styles/LogoGalleryStyles"

const LogoGallery = () => {
  const {
    wpgraphql: {
      logos: { edges: logos },
    },
  } = useStaticQuery(graphql`
    query {
      wpgraphql {
        logos: mediaItems(where: { title: "logo" }, first: 20) {
          edges {
            node {
              sourceUrl
              id
              altText
              mediaItemUrl
              imageFile {
                childImageSharp {
                  fluid(maxWidth: 250, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <LogoGalleryWrapper>
      <h2 className="title">Brands we work with</h2>
      <ul className="logo__gallery">
        {logos.map(logo => (
          <li className="gallery__item" key={logo.node.id}>
            <Img
              className="item__logo"
              fluid={logo.node.imageFile.childImageSharp.fluid}
            />
          </li>
        ))}
      </ul>
    </LogoGalleryWrapper>
  )
}

export default LogoGallery
