import React from "react"
import { Link } from "gatsby"
import { Overlay } from "./styles/OverlayMenuStyles"
import PropTypes from "prop-types"
import { useNavQuery } from "../hooks/useQuery"
import { getSlug } from "../utils/helper"

const OverlayMenu = ({ menuOpen, callback }) => {
  const menu = useNavQuery()

  const [{ menuItems }] = menu.wpgraphql.mainMenu.nodes
  const wpurl = menu.wpgraphql.generalSettings.url

  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <ul className="overlayMenu">
          {menuItems.edges.map(
            ({ node: { url, label, menuItemId, childItems } }) => (
              <li key={menuItemId} className="overlayMenu__item">
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
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
          name="closeButton"
        >
          <span role="img" alt="menu-button">
            {" "}
            ❌
          </span>
        </div>
      </div>
    </Overlay>
  )
}
OverlayMenu.propTypes = {
  menuOpen: PropTypes.bool,
  callback: PropTypes.func,
}
export default OverlayMenu
