import React from "react"
import StyledInnerWrapper from "./styles/HeroSectionStyles"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import ContactForm from "../components/ContactForm"

const HeroSection = ({ imageData, data }) => {
  const isMobile =
    typeof window !== `undefined` ? window.innerWidth < 480 : null
  console.log(isMobile)

  return (
    <BackgroundImage
      Tag="section"
      className="background-section"
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      <StyledInnerWrapper>
        {" "}
        <div className="landing__container">
          <>
            <div className="badge__container">
              <Img
                className="badge"
                fluid={
                  data.badge.emergencyBadge.imageFile.childImageSharp.fluid
                }
              />
            </div>
            {!isMobile ? (
              <div className="landing__submission">
                <h2 className="title">Request an Estimate</h2>
                <ContactForm className="landing" />
              </div>
            ) : (
              <div className="landing__cta" style={{ margin: "auto" }}>
                <Link to="/contact-us">
                  <button
                    className="cta-btn btn"
                    style={{
                      fontSize: "1.5rem",
                      lineHeight: "1.5",
                      padding: "10px 20px",
                      fontWeight: "600",
                    }}
                    name="call-to-action"
                  >
                    Get an Estimate
                  </button>
                </Link>
              </div>
            )}
          </>
        </div>
      </StyledInnerWrapper>
    </BackgroundImage>
  )
}

const StyledHeroSection = styled(HeroSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`
StyledHeroSection.propTypes = {
  imageData: PropTypes.object.isRequired,
}
export default StyledHeroSection
