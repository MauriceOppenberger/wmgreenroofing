import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import SEO from "../components/Seo"

import PageWrapper from "./templateStyles/PageStyle"
import GalleryWrapper from "./templateStyles/GalleryStyle"

const GalleryTemplate = props => {
  const {
    data: { wpgraphql },
  } = props

  const { title, description } = wpgraphql.currentPage

  return (
    <Layout>
      <SEO title={title} description={description.siteDescription} />
      <div className="page__title">
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <PageWrapper>
        <div className="page__container" style={{ textAlign: "center" }}>
          {wpgraphql.video && (
            <video
              autoPlay
              muted
              controls
              loop
              style={{ width: "80%", height: "auto", borderRadius: "15px" }}
            >
              <source
                src={wpgraphql.video.mediaItemUrl}
                type="video/mp4"
                alt={wpgraphql.video.title}
              />
            </video>
          )}
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
        description {
          siteDescription
        }
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
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
      video: mediaItemBy(slug: "BirdsView") {
        title
        mediaItemUrl
      }
    }
  }
`
