import { useStaticQuery, graphql } from "gatsby"

export const useNavQuery = () => {
  const menus = useStaticQuery(graphql`
    query menus {
      wpgraphql {
        mainMenu: menus(where: { id: 2 }) {
          nodes {
            menuItems {
              edges {
                node {
                  label
                  menuItemId
                  url
                  childItems {
                    edges {
                      node {
                        label
                        url
                        menuItemId
                      }
                    }
                  }
                }
              }
            }
          }
        }
        generalSettings {
          url
        }
        socialMenu: menus(where: { id: 5 }) {
          nodes {
            menuItems {
              edges {
                node {
                  label
                  url
                  menuItemId
                }
              }
            }
          }
        }
        FooterMenu: menus(where: { id: 6 }) {
          nodes {
            menuItems {
              edges {
                node {
                  label
                  url
                  menuItemId
                }
              }
            }
          }
        }
      }
    }
  `)

  return menus
}
