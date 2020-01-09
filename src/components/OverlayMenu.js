import React from "react"
import { Overlay } from "./styles/OverlayMenuStyles"
import PropTypes from "prop-types"
import Nav from "./Nav"

const OverlayMenu = ({ menuOpen, callback }) => {
  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <Nav className="overlayMenu" />
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
