import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"

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

const StyledInnerWrapper = styled.div`
  .landing__container {
    min-height: 650px;
    display: flex;
    flex-flow: row wrap;
    padding: 1rem;
    max-width: 1400px;
    margin: auto;
  }
  .badge__container {
    flex: 1;
    .badge {
      width: 150px;
      position: absolute !important;
      bottom: -100px;
      left: 1rem;
    }
  }
  .landing__submission {
    flex: 1;

    background: var(--mainBlack);
    box-shadow: var(--darkShadow);
    color: var(--mainWhite);
    padding: 1.5rem;
    max-width: 500px;
    min-width: 400px;

    margin-bottom: 2rem;
  }
  @media screen and (max-width: 550px) {
    .landing__container {
      padding: 0px !important;
    }
    .landing__submission {
      max-width: 100% !important;
      margin: 0 auto !important;
    }
    .badge__container {
      height: 0 !important;
      width: 0 !important;
      min-width: 0 !important;
      flex: 0 !important;
    }
  }

  @media screen and (max-width: 776px) {
    .badge__container {
      flex: 1;
      min-width: 100%;
      .badge {
        width: 100px;
        margin: 2rem 0;
      }
    }
    .landing__submission {
      flex: 1;
      /* min-width: 100%; */
      max-width: 500px;
      min-width: 200px;
      margin: auto;
    }
  }

  @media screen and (min-width: 2100px) {
    .landing__container {
      max-width: 1600px;
    }
    .landing__submission {
      max-width: 700px;
    }
  }
`

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
