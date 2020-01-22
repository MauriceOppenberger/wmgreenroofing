import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import contentParser from "gatsby-wpgraphql-inline-images"
import SEO from "../components/Seo"

import PageWrapper from "./templateStyles/PageStyle"

const PageTemplate = props => {
  const {
    data: {
      wpgraphql: { currentPage },
    },
    pageContext: { pluginOptions },
  } = props

  const { title, content, description } = currentPage

  return (
    <Layout>
      <SEO title={title} description={description.siteDescription} />

      <div className="page__title">
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <PageWrapper>
        <div className="page__container">
          <div>{contentParser({ content }, pluginOptions)}</div>
        </div>
      </PageWrapper>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($pageId: Int!) {
    wpgraphql {
      currentPage: pageBy(pageId: $pageId) {
        title
        content
        description {
          siteDescription
        }
        isFrontPage
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
`
