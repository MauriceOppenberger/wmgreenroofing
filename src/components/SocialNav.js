import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useNavQuery } from "../hooks/useQuery"
import Img from "gatsby-image"

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

import SocialNavWrapper from "./styles/SocialNavStyles"

const SocialNav = ({ className }) => {
  const menu = useNavQuery()

  const [{ menuItems }] = menu.wpgraphql.socialMenu.nodes
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "bbb-logo-horizontal.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data.file.childImageSharp.fluid)
  return (
    <SocialNavWrapper>
      <div className={className}>
        <ul className="social__nav">
          {menuItems.edges.map(({ node }) => {
            return (
              <li key={node.menuItemId} className="nav__item">
                <a
                  href={node.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  title={node.label}
                >
                  {node.label === "LinkedIn" ? (
                    <FaLinkedin size={22} />
                  ) : node.label === "Facebook" ? (
                    <FaFacebook size={22} />
                  ) : node.label === "Instagram" ? (
                    <FaInstagram size={22} />
                  ) : null}
                </a>
              </li>
            )
          })}
          <li className="nav__item ">
            <a
              href="https://www.bbb.org/ca/on/guelph/profile/roofing-contractors/wm-green-roofing-ltd-0107-2071#sealclick"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Img
                className="bbb-icon"
                fluid={data.file.childImageSharp.fluid}
              />
            </a>
          </li>
        </ul>
      </div>
    </SocialNavWrapper>
  )
}

export default SocialNav
