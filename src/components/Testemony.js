import React from "react"
import Img from "gatsby-image"
import { TestemonyWrapper } from "./styles/TestimonyStyles"

const Slide = ({ testemony, active }) => {
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
