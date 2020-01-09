import React from "react"
import { Overlay } from "./styles/OverlayMenuStyles"
import PropTypes from "prop-types"
import Nav from "./Nav"

const OverlayMenu = ({ menuOpen, callback }) => {
  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <Nav className="overlayMenu" />
        <button
          onClick={callback}
          tabIndex="0"
          onKeyDown={callback}
          value="close"
          name="close-button"
        >
          <span
            className="closeButton"
            role="img"
            alt="menu-button"
            name="close"
          >
            {" "}
            ❌
          </span>
        </button>
      </div>
    </Overlay>
  )
}
OverlayMenu.propTypes = {
  menuOpen: PropTypes.bool,
  callback: PropTypes.func,
}
export default OverlayMenu
