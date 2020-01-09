import React from "react"
import { Link } from "gatsby"
import { useNavQuery } from "../hooks/useQuery"
import { getSlug } from "../utils/helper"
import { NavWrapper } from "./styles/NavigationStyles"
import PropTypes from "prop-types"

const FooterNav = ({ className }) => {
  const menu = useNavQuery()

  const [{ menuItems }] = menu.wpgraphql.FooterMenu.nodes
  const wpurl = menu.wpgraphql.generalSettings.url

  return (
    <NavWrapper>
      <ul className={className}>
        {menuItems.edges.map(({ node: { label, menuItemId, url } }) => {
          return (
            <li key={menuItemId} className={`${className}__nav__item`}>
              <Link to={`${getSlug(url, wpurl)}`} activeClassName="active">
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </NavWrapper>
  )
}
FooterNav.propTypes = {
  className: PropTypes.string,
}
export default FooterNav
