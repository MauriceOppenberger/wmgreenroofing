import React from "react"
import { useNavQuery } from "../hooks/useQuery"
import styled from "styled-components"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const SocialNavWrapper = styled.div`
  padding: 1rem 0;
  justify-content: space-evenly;
  color: #fff;

  .header {
    max-width: max-content;
    margin: 0 0 0 auto;
  }
  .footer {
    max-width: max-content;
    margin: 1rem auto;
  }
  p {
    margin: auto 0;
  }
  .social__nav {
    display: flex;
    flex-flow: row wrap;
  }
  .nav__item {
    flex: 1;
    margin: 0 1rem;
    list-style: none;
  }
  .nav__item a svg {
    transition: all 0.2s ease-in-out;
  }
  .nav__item a:hover svg {
    transform: scale(1.3);
  }
`
const SocialNav = ({ className }) => {
  const menu = useNavQuery()

  // </li>
  // if (label === "LinkedIn") {
  //   return <FaLinkedin size={32} />
  // }
  // if (label === "Instagram") {
  //   return <FaInstagram size={32} />
  // }

  const [{ menuItems }] = menu.wpgraphql.socialMenu.nodes

  return (
    <SocialNavWrapper>
      <div className={className}>
        <ul className="social__nav">
          {menuItems.edges.map(({ node }) => {
            return (
              <li key={node.menuItemId} className="nav__item">
                <a href={node.url} target="_blank" rel="noreferrer noopener">
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
