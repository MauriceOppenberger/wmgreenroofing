import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import contentParser from "gatsby-wpgraphql-inline-images"
import SEO from "../components/Seo"

import PageWrapper from "./templateStyles/PageStyle"

const pluginOptions = {
  wordPressUrl: "https://wordpress.oppenberger.com/",
  uploadsUrl: "https://wordpress.oppenberger.com/wp-content/uploads/",
}

const PageTemplate = ({ data: { wpgraphql } }) => {
  const content = wpgraphql.currentPage.content
  return (
    <Layout>
      <SEO title={wpgraphql.currentPage.title} />

      <div className="page__title">
        <h1 dangerouslySetInnerHTML={{ __html: wpgraphql.currentPage.title }} />
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
