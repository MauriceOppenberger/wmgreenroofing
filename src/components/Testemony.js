import React from "react"
import Img from "gatsby-image"
import { TestemonyWrapper } from "./styles/TestimonyStyles"

const Slide = ({ testemony, active, mouseOver, mouseOut }) => {
  return (
    <TestemonyWrapper className={active ? "active" : ""}>
      <div
        className="testemony__card"
        onMouseOver={mouseOver}
        onFocus={mouseOver}
        onBlur={mouseOut}
        onMouseOut={mouseOut}
        role="button"
      >
        <h3>- {testemony.title} -</h3>

        <div
          className="card__content"
          dangerouslySetInnerHTML={{ __html: testemony.content }}
        />
        <Img
          fluid={testemony.featuredImage.imageFile.childImageSharp.fluid}
          className="card__image"
        />
      </div>
    </TestemonyWrapper>
  )
}

export default Slide
