import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import contentParser from "gatsby-wpgraphql-inline-images"
import ReviewForm from "../components/ReviewForm"
import SEO from "../components/Seo"

import PageWrapper from "./templateStyles/PageStyle"

const ReviewTemplate = props => {
  const {
    data: {
      wpgraphql: { currentPage },
    },
    pageContext: { pluginOptions },
  } = props

  const { title, content } = currentPage

  return (
    <Layout>
      <SEO title={title} />
      <div className="page__title">
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <PageWrapper>
        <div className="page__container">
          <div className="inner-container">
            <div className="page__content">
              <ReviewForm />
            </div>
            {contentParser({ content }, pluginOptions)}
          </div>
        </div>
      </PageWrapper>
    </Layout>
  )
}

export default ReviewTemplate

export const pageQuery = graphql`
  query($pageId: Int!) {
    wpgraphql {
      currentPage: pageBy(pageId: $pageId) {
        title
        content
      }
    }
  }
`
