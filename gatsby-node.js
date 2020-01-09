/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const createPages = require("./gatsby/createPages")
const path = require("path")
const slash = require("slash")
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
exports.createPages = async ({ graphql, actions }) => {
  const pluginOptions = {
    wordPressUrl: "https://wordpress.oppenberger.com/",
    uploadsUrl: "https://wordpress.oppenberger.com/wp-content/uploads/",
  }
  await createPages({ actions, graphql }, pluginOptions)
}
