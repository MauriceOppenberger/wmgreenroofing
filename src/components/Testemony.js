import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

// import { StyledImg, WbnSlide } from "./styles/HeroSliderStyles"
const TestemonyWrapper = styled.div`
  position: absolute;
  /* height: 800px; */
  color: var(--mainWhite);
  width: 100%;
  margin: auto;
  opacity: 0;
  transition: opacity 1s ease;
  background-size: cover !important;
  background-position: center !important;
  .testemony__card {
    width: 400px;
    margin: auto;
    text-align: center;
  }
  .card__content {
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card__image {
    max-width: 25px;
    margin: 0 auto;
  }
`

const Slide = ({ testemony, active }) => {
  console.log(testemony)
  return (
    <TestemonyWrapper className={active ? "active" : ""}>
      <div className="testemony__card">
        <Img
          fluid={testemony.featuredImage.imageFile.childImageSharp.fluid}
          className="card__image"
        />
        <div
          className="card__content"
          dangerouslySetInnerHTML={{ __html: testemony.content }}
        />
        <h3>- {testemony.title} -</h3>
      </div>
    </TestemonyWrapper>
  )
}

export default Slide
