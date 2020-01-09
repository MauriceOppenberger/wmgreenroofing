const path = require(`path`)
const slash = require("slash")
module.exports = async ({ actions, graphql }, pluginOptions) => {
  const Get_Pages = await graphql(`
    query Get_Pages {
      page: wpgraphql {
        pages(first: 11) {
          edges {
            node {
              id
              pageId
              slug
              status
              isFrontPage
              page_template {
                template
              }
            }
          }
        }
      }
    }
  `)

  if (Get_Pages.data.error) {
    throw new Error(Get_Pages.errors)
  }
  console.log(Get_Pages.data)

  const { createPage } = actions

  const homePageTemplate = path.resolve(`./src/templates/homepage.js`)
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const reviewTemplate = path.resolve(`./src/templates/review.js`)
  const contactTemplate = path.resolve(`./src/templates/contact.js`)
  const galleryTemplate = path.resolve(`./src/templates/gallery.js`)

  const { pages } = Get_Pages.data.page
  pages.edges.forEach(({ node }) => {
    if (node.status === "publish") {
      if (node.isFrontPage) {
        createPage({
          path: "/",
          component: slash(homePageTemplate),
          context: {
            pluginOptions,
            pageId: node.pageId,
            id: node.id,
          },
        })
      } else {
        createPage({
          path: node.slug,
          component: slash(
            node.page_template.template === "gallery-template"
              ? galleryTemplate
              : node.page_template.template === "contact-template"
              ? contactTemplate
              : node.page_template.template === "review-template"
              ? reviewTemplate
              : pageTemplate
          ),
          context: {
            pluginOptions,
            pageId: node.pageId,
            id: node.id,
          },
        })
      }
    }
  })
}
