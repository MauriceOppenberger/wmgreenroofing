import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

// import { StyledImg, WbnSlide } from "./styles/HeroSliderStyles"
const SlideWrapper = styled.div`
  position: absolute;
  height: 800px;
  width: 100%;
  opacity: 0;
  transition: opacity 1s ease;
  background-size: cover !important;
  background-position: center !important;
`

const Slide = ({ slide, active }) => (
  <SlideWrapper className={active ? "active" : ""}>
    <Img fluid={slide.imageFile.childImageSharp.fluid} />
  </SlideWrapper>
)

export default Slide
