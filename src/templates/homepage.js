import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import StyledHeroSection from "../components/StyledHero"
import LogoGallery from "../components/LogoGallery"
import ContactForm from "../components/ContactForm"
import contentParser from "gatsby-wpgraphql-inline-images"
import TestemonySlider from "../components/TestemonySlider"
import ContentWrapper from "./templateStyles/HomePageStyle"
import SEO from "../components/Seo"

const HomepageTemplate = props => {
  const [deviceWidth, setDeviceWidth] = React.useState()

  React.useEffect(() => {
    const width = window.innerWidth
    setDeviceWidth(width)
  }, [])
  const {
    data: {
      wpgraphql: { currentPage },
    },
    pageContext: { pluginOptions },
  } = props

  console.log(deviceWidth)
  const { title, content } = currentPage

  return (
    <Layout>
      <SEO title={title} />
      <StyledHeroSection
        imageData={currentPage.featuredImage.imageFile.childImageSharp.fluid}
        data={currentPage}
      >
        {/* <div className="landing__container">
          <>
            <div className="badge__container">
              <Img
                className="badge"
                fluid={
                  currentPage.badge.emergencyBadge.imageFile.childImageSharp
                    .fluid
                }
              />
            </div>
            {deviceWidth > 667 && (
              <div className="landing__submission">
                <h2 className="title">Request an Estimate</h2>
                <ContactForm className="landing" />
              </div>
            )}
          </>
        </div> */}
      </StyledHeroSection>
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
