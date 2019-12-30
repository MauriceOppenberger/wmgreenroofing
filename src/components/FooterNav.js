import React from "react"
import { Link } from "gatsby"
import { useNavQuery } from "../hooks/useQuery"
import { getSlug } from "../utils/helper"
import { NavWrapper } from "./Styles/NavigationStyles"

const FooterNav = ({ className }) => {
  const menu = useNavQuery()

  const [{ menuItems }] = menu.wpgraphql.FooterMenu.nodes
  const wpurl = menu.wpgraphql.generalSettings.url

  return (
    <NavWrapper>
      <nav className="nav__container">
        <ul className={`primary__nav ${className}`}>
          {menuItems.edges.map(({ node: { label, menuItemId, url } }) => {
            return (
              <li key={menuItemId} className="nav__item">
                <Link to={`${getSlug(url, wpurl)}`} activeClassName="active">
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </NavWrapper>
  )
}

export default FooterNav
