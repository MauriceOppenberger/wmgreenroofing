/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const slash = require("slash")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: "/",
    toPath: "/home",
    redirectInBrowser: true,
    isPermanent: true,
  })

  const { data } = await graphql(`
    query Get_Pages {
      page: wpgraphql {
        pages(first: 20) {
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
  if (data.error) {
    console.log(data.errors)
    throw new Error(data.errors)
  }
  const homePageTemplate = path.resolve(`./src/templates/homepage.js`)
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const reviewTemplate = path.resolve(`./src/templates/review.js`)
  const contactTemplate = path.resolve(`./src/templates/contact.js`)
  const galleryTemplate = path.resolve(`./src/templates/gallery.js`)
  const { pages } = data.page
  pages.edges.forEach(({ node }) => {
    if (node.status === "publish") {
      if (node.isFrontPage) {
        createPage({
          path: "/home",
          component: slash(homePageTemplate),
          context: {
            pageId: node.pageId,
            id: node.id,
          },
        })
      } else if (node.page_template.template === "gallery-template") {
        createPage({
          path: node.slug,
          component: slash(galleryTemplate),
          context: {
            pageId: node.pageId,
            id: node.id,
          },
        })
      } else if (node.page_template.template === "contact-template") {
        createPage({
          path: node.slug,
          component: slash(contactTemplate),
          context: {
            pageId: node.pageId,
            id: node.id,
          },
        })
      } else if (node.page_template.template === "review-template") {
        createPage({
          path: node.slug,
          component: slash(reviewTemplate),
          context: {
            pageId: node.pageId,
            id: node.id,
          },
        })
      } else {
        createPage({
          path: node.slug,
          component: slash(pageTemplate),
          context: {
            pageId: node.pageId,
            id: node.id,
          },
        })
      }
    }
  })
}

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
