import React from "react"
import Nav from "./Nav"
import SiteLogo from "./SiteLogo"
import SocialNav from "./SocialNav"

import { HeaderWrapper } from "./styles/HeaderStyles"

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header__container">
        <SiteLogo className="header" />
        <div className="nav__container">
          <div className="contact__info">
            <span>
              <a
                href="tel:(519) 822-6414"
                alt="phone link"
                title="phone number"
              >
                (519) 822-6414
              </a>
            </span>

            <span>
              <a
                href="mailto:info@wmgreenroofing.ca"
                alt="email link"
                title="email address"
              >
                {" "}
                info@wmgreenroofing.ca
              </a>
            </span>
            <SocialNav className="header" />
          </div>

          <Nav className="primary__nav header" />
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header
