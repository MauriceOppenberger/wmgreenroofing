import React from "react"
import { Link } from "gatsby"

import SocialNav from "./SocialNav"
import FooterNav from "./FooterNav"
import SiteLogo from "./SiteLogo"
import FooterWrapper from "./styles/FooterStyles"

const Footer = () => (
  <FooterWrapper>
    <div className="footer__cta">
      <button className="footer__btn btn">
        <Link to="/contact-us">Get an Estimate Now </Link>
      </button>
    </div>
    <nav className="nav__container">
      <FooterNav className="footer__nav footer" />
    </nav>

    <SocialNav className="footer" />
    <SiteLogo className="footer" />

    <div className="footer__contact"></div>

    {/* <div>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div> */}
  </FooterWrapper>
)

export default Footer
