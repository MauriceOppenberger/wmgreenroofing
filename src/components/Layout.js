/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import OverlayMenu from "./OverlayMenu"

import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"
import Hamburger from "./Hamburger"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <div className="status-banner">
        <h4>COVID-19 Update:</h4>
        <p>
          We are closely monitoring the situation and are continuing to operate
          with extra precautions in place at this time. Please contact our
          office to get in touch, no walk-ins. Stay safe!{" "}
        </p>
      </div>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
