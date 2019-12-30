import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import SEO from "../components/Seo"

import PageWrapper from "./templateStyles/PageStyle"
import GalleryWrapper from "./templateStyles/GalleryStyle"

const GalleryTemplate = ({ data: { wpgraphql } }) => {
  console.log(wpgraphql.images)
  return (
    <Layout>
      <SEO title={wpgraphql.currentPage.title} />
      <div className="page__title">
        <h1 dangerouslySetInnerHTML={{ __html: wpgraphql.currentPage.title }} />
      </div>
      <PageWrapper>
        <div className="page__container">
          <GalleryWrapper>
            {wpgraphql.images.edges.map(({ node: image }) => (
              <li key={image.id} className="gallery__item">
                <a
                  href={image.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img
                    fluid={image.imageFile.childImageSharp.fluid}
                    alt={image.alt}
                    className="gallery__image"
                  />
                </a>
              </li>
            ))}
          </GalleryWrapper>
        </div>
      </PageWrapper>
    </Layout>
  )
}

export default GalleryTemplate

export const pageQuery = graphql`
  query($pageId: Int!) {
    wpgraphql {
      currentPage: pageBy(pageId: $pageId) {
        title
      }
      images: mediaItems(where: { title: "Gallery Image" }) {
        edges {
          node {
            sourceUrl
            link
            id
            altText
            imageFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
