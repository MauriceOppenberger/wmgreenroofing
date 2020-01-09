import React from "react"
import { Link } from "gatsby"
import { NavWrapper } from "./styles/NavigationStyles"
import { useNavQuery } from "../hooks/useQuery"
import { getSlug } from "../utils/helper"
import PropTypes from "prop-types"

const Nav = ({ className }) => {
  const menu = useNavQuery()

  const [{ menuItems }] = menu.wpgraphql.mainMenu.nodes
  const wpurl = menu.wpgraphql.generalSettings.url
  console.log(menuItems)
  return (
    <NavWrapper>
      <ul className={className}>
        {menuItems.edges.map(
          ({ node: { label, menuItemId, url, childItems } }) => (
            <li key={menuItemId} className={`${className}__nav__item`}>
              {url !== null ? (
                <Link to={`${getSlug(url, wpurl)}`} activeClassName="active">
                  {label}
                </Link>
              ) : (
                <p>{label}</p>
              )}

              {childItems.edges.length > 0 ? (
                <>
                  <ul className="sub__nav">
                    {childItems.edges.map(
                      ({ node: { label, url, menuItemId } }) => (
                        <li className="sub__nav__item" key={menuItemId}>
                          <Link
                            to={`${getSlug(url, wpurl)}`}
                            activeClassName="active"
                          >
                            {label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </>
              ) : null}
            </li>
          )
        )}
      </ul>
    </NavWrapper>
  )
}

Nav.propTypes = {
  className: PropTypes.string,
}

export default Nav
