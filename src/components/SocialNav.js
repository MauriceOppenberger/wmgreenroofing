import React from "react"
import { useNavQuery } from "../hooks/useQuery"

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

import SocialNavWrapper from "./styles/SocialNavStyles"

const SocialNav = ({ className }) => {
  const menu = useNavQuery()

  const [{ menuItems }] = menu.wpgraphql.socialMenu.nodes

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
        </ul>
      </div>
    </SocialNavWrapper>
  )
}

export default SocialNav
