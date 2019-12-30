import PropTypes from "prop-types"
import React from "react"
import Nav from "./Nav"
import SiteLogo from "./SiteLogo"
import SocialNav from "./SocialNav"

import { HeaderWrapper } from "./Styles/HeaderStyles"

const Header = ({ siteTitle }) => {
  return (
    <HeaderWrapper>
      <div className="header__container">
        <SiteLogo className="header" />
        <div className="nav__container">
          <div className="contact__info">
            <span>(519) 822-6414</span>

            <span>info@wmgreenroofing.ca</span>
            <SocialNav className="header" />
          </div>
          <Nav className="header" />
        </div>
      </div>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
