import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import useHover from "../../hooks/useHover"

const NavItem = ({ children }) => {
  const [hovering, attr] = useHover()

  return (
    <div {...attr}>
      {children}
      {hovering === true && (
        <ul className="sub__nav">
          <li className="sub__nav__item">Hovering True</li>
        </ul>
      )}
    </div>
  )
}

export default NavItem
