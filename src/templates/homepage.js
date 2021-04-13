import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHeroSection from "../components/StyledHero"
import LogoGallery from "../components/LogoGallery"
import contentParser from "gatsby-wpgraphql-inline-images"
import TestemonySlider from "../components/TestemonySlider"
import ContentWrapper from "./templateStyles/HomePageStyle"
import SEO from "../components/Seo"
import Instagram from "../components/instagram"

const HomepageTemplate = props => {
  const {
    data: {
      wpgraphql: { currentPage },
    },
    pageContext: { pluginOptions },
  } = props

  const { title, content, description } = currentPage
  return (
    <Layout>
      <SEO title={title} description={description.siteDescription} />
      <StyledHeroSection
        imageData={currentPage.featuredImage.imageFile.childImageSharp.fluid}
        data={currentPage}
      ></StyledHeroSection>
      <ContentWrapper>
        {contentParser({ content }, pluginOptions)}
        <div className="testimony__container">
          <h2 className="title">Reviews</h2>
          <TestemonySlider />
        </div>
        {/* <div className="socialMedia__container">
          <h2 className="title">Recent Projects</h2>
          <Instagram />
        </div> */}
        <LogoGallery />
      </ContentWrapper>
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
        description {
          siteDescription
        }
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
              fluid(maxWidth: 1500, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
