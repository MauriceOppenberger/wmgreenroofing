import React from "react"
import StyledInnerWrapper from "./styles/HeroSectionStyles"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import ContactForm from "../components/ContactForm"

const HeroSection = ({ imageData, data }) => {
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
              <a href="tel:(519) 822-6414">
                <Img
                  className="badge"
                  fluid={
                    data.badge.emergencyBadge.imageFile.childImageSharp.fluid
                  }
                />
              </a>
            </div>
            <div className="landing__submission">
              <h2 className="title">Request an Estimate</h2>
              <ContactForm className="landing" />
            </div>
            <div className="landing__cta">
              <Link to="/contact-us">
                <button className="cta-btn btn" name="call-to-action">
                  Request an Estimate
                </button>
              </Link>
            </div>
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
