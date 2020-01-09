import React from "react"
import StyledInnerWrapper from "./styles/BackgroundSectionStyles"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const BackgroundSection = ({ imageData, children }) => {
  return (
    <BackgroundImage
      Tag="section"
      className="background-section"
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      <StyledInnerWrapper>{children}</StyledInnerWrapper>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`
StyledBackgroundSection.propTypes = {
  imageData: PropTypes.object.isRequired,
}
export default StyledBackgroundSection
