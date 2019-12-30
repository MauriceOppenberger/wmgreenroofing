import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import useHover from "../../hooks/useHover"

const NavItem = ({ children }) => {
  const [hovering, attr] = useHover()
  // const NavItem = useStaticQuery(graphql`
  //   query Get_Nav_Items {
  //     wpgraphql {
  //       menuItems(where: { id: 5 }) {
  //         edges {
  //           node {
  //             id
  //             label
  //             childItems {
  //               edges {
  //                 node {
  //                   label
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // menus(where: { id: 2 }) {
  //   edges {
  //     node {
  //       menuId
  //       menuItems {
  //         edges {
  //           node {
  //             label
  //             childItems {
  //               edges {
  //                 node {
  //                   label
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  console.log(NavItem)
  return (
    <div {...attr}>
      {children}
      {hovering === true && (
        <ul className="sub__nav">
          <li className="sub__nav__item">Hovering True</li>
        </ul>
      )}

      {/* <ul className="primary__nav__subList">
        <li key={menuItemId} className="nav__item">
          <Link to={`${getSlug(url)}`}>{label}</Link>
        </li>
        {edges.map(({ node: { label, menuItemId } }) => (
          <li key={menuItemId} className="nav__item">
            <Link to={`${getSlug(url)}`}>{label}</Link>
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default NavItem
