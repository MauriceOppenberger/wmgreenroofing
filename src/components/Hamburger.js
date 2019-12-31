import React from "react"
import PropTypes from "prop-types"
import { GiHamburgerMenu } from "react-icons/gi"

import { HamburgerButton } from "./Styles/HamburgerStyles"

const Hamburger = ({ handleOverlayMenu }) => (
  <HamburgerButton onClick={handleOverlayMenu} tabIndex="0">
    <span role="img" alt="menu-button">
      {" "}
      <GiHamburgerMenu size={22} color="#fff" />
    </span>
  </HamburgerButton>
)

Hamburger.propTypes = {
  handleOverlayMenu: PropTypes.func,
}

export default Hamburger
