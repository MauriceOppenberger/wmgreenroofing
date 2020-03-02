import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useInterval } from "../hooks/useInterval"
import Testemony from "./Testemony"
import { SliderWrapper } from "./styles/TestimonyStyles"

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
    interval: 5000,
    hover: false,
  })

  useInterval(
    () => {
      if (!state.hover) {
        if (state.testemonies.length > 1) {
          setState(prev => ({
            ...prev,
            activeIndex: (prev.activeIndex + 1) % prev.testemonies.length,
          }))
        }
      }
    },
    state.autoSlide ? state.interval : null
  )
  const handleMouseOver = () => {
    setState(prevState => ({ ...prevState, hover: true }))
  }
  const handleMouseOut = () => {
    setState(prevState => ({ ...prevState, hover: false }))
  }

  return (
    <SliderWrapper>
      {testemonies.map((testemony, i) => (
        <Testemony
          key={i}
          testemony={testemony.node}
          active={state.activeIndex === i}
          mouseOver={handleMouseOver}
          mouseOut={handleMouseOut}
        />
      ))}
    </SliderWrapper>
  )
}

export default TestemonySlider
