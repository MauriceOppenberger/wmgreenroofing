import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const LogoGalleryWrapper = styled.div`
  margin: 2rem;
  h2.title {
    text-align: center;
  }
  .logo__gallery {
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    max-width: 1280px;
    padding: 1rem 0;
  }
  .gallery__item {
    list-style: none;
    flex: 1;
    max-width: 250px;
    min-width: 100px;
    margin: 1rem 2rem;
    padding: 1rem 0;
  }
`
const LogoGallery = () => {
  const {
    wpgraphql: {
      slides: { edges: slides },
    },
  } = useStaticQuery(graphql`
    query {
      wpgraphql {
        slides: mediaItems(where: { title: "logo" }) {
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
        {slides.map((slide, i) => (
          <li className="gallery__item" key={slide.node.id}>
            <Img
              className="item__logo"
              fluid={slide.node.imageFile.childImageSharp.fluid}
            />
          </li>
        ))}
      </ul>
    </LogoGalleryWrapper>
  )
}

export default LogoGallery
