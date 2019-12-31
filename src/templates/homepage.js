import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import StyledBackgroundSection from "../components/StyledBackground"
import ContactForm from "../components/ContactForm"
import LogoGallery from "../components/LogoGallery"
import contentParser from "gatsby-wpgraphql-inline-images"
import TestemonySlider from "../components/TestemonySlider"
import ContentWrapper from "./templateStyles/HomePageStyle"
import SEO from "../components/Seo"

const HomepageTemplate = ({ data: { wpgraphql } }) => {
  const pluginOptions = {
    wordPressUrl: "https://wordpress.oppenberger.com/",
    uploadsUrl: "https://wordpress.oppenberger.com/wp-content/uploads/",
  }
  const content = wpgraphql.currentPage.content
  return (
    <Layout>
      <SEO title={wpgraphql.currentPage.title} />
      <StyledBackgroundSection
        imageData={
          wpgraphql.currentPage.featuredImage.imageFile.childImageSharp.fluid
        }
        data={wpgraphql}
      >
        <div className="landing__container">
          <>
            <div className="badge__container">
              <Img
                className="badge"
                fluid={
                  wpgraphql.currentPage.badge.emergencyBadge.imageFile
                    .childImageSharp.fluid
                }
              />
            </div>

            <div className="landing__submission">
              <h2>Request an Estimate</h2>
              <ContactForm className="landing" />
            </div>
          </>
        </div>
      </StyledBackgroundSection>
      <ContentWrapper>
        {contentParser({ content }, pluginOptions)}
      </ContentWrapper>
      <TestemonySlider />
      <LogoGallery />
    </Layout>
  )
}

export default HomepageTemplate

export const pageQuery = graphql`
  query($pageId: Int!) {
    wpgraphql {
      currentPage: pageBy(pageId: $pageId) {
        title
        content
        badge {
          emergencyBadge {
            sourceUrl
            imageFile {
              childImageSharp {
                fluid(maxWidth: 200, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        featuredImage {
          sourceUrl
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
`
