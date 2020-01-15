import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHeroSection from "../components/StyledHero"
import LogoGallery from "../components/LogoGallery"
import contentParser from "gatsby-wpgraphql-inline-images"
import TestemonySlider from "../components/TestemonySlider"
import ContentWrapper from "./templateStyles/HomePageStyle"
import SEO from "../components/Seo"

const HomepageTemplate = props => {
  const {
    data: {
      wpgraphql: { currentPage },
    },
    pageContext: { pluginOptions },
  } = props

  const { title, content } = currentPage

  return (
    <Layout>
      <SEO title={title} />
      <StyledHeroSection
        imageData={currentPage.featuredImage.imageFile.childImageSharp.fluid}
        data={currentPage}
      ></StyledHeroSection>
      <ContentWrapper>
        {contentParser({ content }, pluginOptions)}
        <div className="testimony__container">
          <h2 className="title">Testimonies</h2>
          <TestemonySlider />
        </div>

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
