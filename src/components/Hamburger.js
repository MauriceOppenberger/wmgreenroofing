import React from "react"
import PropTypes from "prop-types"

import { HamburgerButton } from "./Styles/HamburgerStyles"

const Hamburger = ({ handleOverlayMenu }) => (
  <HamburgerButton onClick={handleOverlayMenu} tabIndex="0">
    <span role="img" alt="menu-button">
      {" "}
      ❌
    </span>
  </HamburgerButton>
)

Hamburger.propTypes = {
  handleOverlayMenu: PropTypes.func,
}

export default Hamburger
