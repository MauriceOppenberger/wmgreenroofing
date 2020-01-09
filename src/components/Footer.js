import React from "react"
import { Link } from "gatsby"

import SocialNav from "./SocialNav"
import FooterNav from "./FooterNav"
import SiteLogo from "./SiteLogo"

import styled from "styled-components"

const FooterWrapper = styled.div`
  background: var(--primaryColor);
  color: var(--mainWhite);
  text-align: center;
  padding: 2rem 0 0;

  .footer__contact {
    /* margin: 2rem 0; */
  }
  .footer__contact .blurb {
    max-width: 50%;
    margin: auto;
  }
  .contact__info {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    max-width: 998px;
    margin: auto;
  }
  .footer__cta {
    margin-top: -4.5rem;
    margin-bottom: 2.5rem;
  }
  .footer__btn {
    background: var(--primaryColor);

    font-weight: 600;

    font-size: 1.2rem;
    line-height: 1.5;
    color: var(--mainWhite);
  }
  .footer__btn:hover {
    box-shadow: var(--darkShadow);
  }
`
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
