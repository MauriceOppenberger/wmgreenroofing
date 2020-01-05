import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useInterval } from "../hooks/useInterval"
import styled from "styled-components"
import Testemony from "./Testemony"
// import { SliderWrapper, ButtonWrapper, Button } from "./styles/HeroSliderStyles"

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  margin: 0 0 60px 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;
  background: var(--primaryColor);

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

  /* @media (min-width: 768px) {
    height: 600px;
  }

  @media (min-width: 992px) {
    height: 400px;
  }

  @media (min-width: 1200px) {
    height: 800px;
  } */
`

const TestemonySlider = () => {
  const {
    wpgraphql: {
      testemonies: { edges: testemonies },
    },
  } = useStaticQuery(graphql`
    query {
      wpgraphql {
        testemonies {
          edges {
            node {
              title

              content
              featuredImage {
                sourceUrl
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
    }
  `)

  const [state, setState] = useState({
    testemonies,
    activeIndex: 0,
    autoSlide: true,
    interval: 10000,
  })

  useInterval(
    () => {
      if (state.testemonies.length > 1) {
        setState(prev => ({
          ...prev,
          activeIndex: (prev.activeIndex + 1) % prev.testemonies.length,
        }))
      }
    },
    state.autoSlide ? state.interval : null
  )
  // const handlePrevClick = () => {
  //   setState(prev => ({
  //     ...prev,
  //     autoSlide: false,
  //     activeIndex:
  //       (prev.activeIndex - 1 + prev.testemonies.length) %
  //       prev.testemonies.length,
  //   }))
  // }
  // const handleNextClick = () => {
  //   setState(prev => ({
  //     ...prev,
  //     autoSlide: false,
  //     activeIndex: (prev.activeIndex + 1) % prev.testemonies.length,
  //   }))
  // }
  return (
    <SliderWrapper>
      {testemonies.map((testemony, i) => (
        <Testemony
          key={i}
          testemony={testemony.node}
          active={state.activeIndex === i}
        />
      ))}
    </SliderWrapper>
  )
}

export default TestemonySlider
