import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useInterval } from "../../hooks/useInterval"
import styled from "styled-components"
import Slide from "./Slide"
// import { SliderWrapper, ButtonWrapper, Button } from "./styles/HeroSliderStyles"

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin: 0 0 60px 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;

  .active {
    z-index: 10;
    opacity: 1;
  }

  .active div {
    opacity: 1;
  }

  .active div .wbn-text {
    opacity: 1;
    transform: translateY(0%);
  }

  .active div .wbn-header {
    opacity: 1;
    transform: scale(1);
  }

  @media (min-width: 768px) {
    height: 600px;
  }

  @media (min-width: 992px) {
    height: 700px;
  }

  @media (min-width: 1200px) {
    height: 800px;
  }
`

const LogoSlider = () => {
  const {
    wpgraphql: {
      slides: { edges: slides },
    },
  } = useStaticQuery(graphql`
    query {
      wpgraphql {
        slides: mediaItems(where: { title: "logo" }) {
          edges {
            node {
              sourceUrl
              id
              altText
              mediaItemUrl
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
    }
  `)

  const [state, setState] = useState({
    slides,
    activeIndex: 0,
    autoSlide: true,
    interval: 10000,
  })

  useInterval(
    () => {
      setState(prev => ({
        ...prev,
        activeIndex: (prev.activeIndex + 1) % prev.slides.length,
      }))
    },
    state.autoSlide ? state.interval : null
  )
  const handlePrevClick = () => {
    setState(prev => ({
      ...prev,
      autoSlide: false,
      activeIndex:
        (prev.activeIndex - 1 + prev.slides.length) % prev.slides.length,
    }))
  }
  const handleNextClick = () => {
    setState(prev => ({
      ...prev,
      autoSlide: false,
      activeIndex: (prev.activeIndex + 1) % prev.slides.length,
    }))
  }
  return (
    <SliderWrapper>
      {slides.map((slide, i) => (
        <Slide
          key={slide.node.id}
          slide={slide.node}
          active={state.activeIndex === i}
        />
      ))}
    </SliderWrapper>
  )
}

export default LogoSlider
