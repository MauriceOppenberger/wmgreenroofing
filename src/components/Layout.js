/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
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
  const res = useStaticQuery(graphql`
    query MySettingsQuery {
      wpgraphql {
        generalSettings {
          title
        }
      }
    }
  `)

  return (
    <>
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header siteTitle={res.wpgraphql.generalSettings.title} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
