import React from "react"
import { Link } from "gatsby"
import { NavWrapper } from "./Styles/NavigationStyles"
import { useNavQuery } from "../hooks/useQuery"
import { getSlug } from "../utils/helper"
import PropTypes from "prop-types"

const Nav = ({ className }) => {
  const menu = useNavQuery()

  const [{ menuItems }] = menu.wpgraphql.mainMenu.nodes
  const wpurl = menu.wpgraphql.generalSettings.url

  return (
    <NavWrapper>
      <nav className="nav__container ">
        {
          <ul className={`primary__nav ${className}`}>
            {menuItems.edges.map(
              ({ node: { label, menuItemId, url, childItems } }) => (
                <li key={menuItemId} className="nav__item">
                  <Link to={`${getSlug(url, wpurl)}`} activeClassName="active">
                    {label}
                  </Link>

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
        }
      </nav>
    </NavWrapper>
  )
}

Nav.propTypes = {
  class: PropTypes.string,
}

export default Nav
