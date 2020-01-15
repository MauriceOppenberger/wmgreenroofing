import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"

const SiteLogoWrapper = styled.div`
  flex: 1;

  .header__logo {
    width: 25vmax;
    max-width: 250px;
  }
  .footer__logo {
    max-width: 32vmax;
    margin: 1rem auto 0;
  }
`
const SiteLogo = ({ className }) => {
  const logo = useStaticQuery(graphql`
    query Get_Logo {
      wpgraphql {
        logo: mediaItems(where: { title: "WmGreenRoofing" }) {
          edges {
            node {
              sourceUrl
              slug
              id
              altText
              mediaItemUrl
              imageFile {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 250) {
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
  const { node } = logo.wpgraphql.logo.edges[0]
  return (
    <SiteLogoWrapper>
      <Link to="/" title="Home">
        <Img
          fluid={node.imageFile.childImageSharp.fluid}
          className={`${className}__logo`}
        />
      </Link>
    </SiteLogoWrapper>
  )
}

export default SiteLogo
