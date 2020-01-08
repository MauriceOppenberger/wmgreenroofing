require((id = "dotenv")).config({
  path: ".env",
})
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Wm. Green Roofing Ldt.`,
    description: `wordpress site remodeling`,
    keywords:
      "roofing contractor, guelph roofing, sloped roofing, flat roofing, commercial roofing guelph, residential roofing guelph",
    author: `Maurice Oppenberger`,
    siteUrl: "https://wmgreenroofingv2.netlify.com/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, "src", "images"),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: "gatsby-background-image",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wmgreenroofing`,
        short_name: `WGR`,
        start_url: `/`,
        background_color: `#340610`,
        theme_color: `#340610`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-wpgraphql-inline-images",
      options: {
        wordPressUrl: `${process.env.API_PROTOCOL}://${process.env.API_URL}`,
        uploadsUrl: `${process.env.API_PROTOCOL}://${process.env.API_URL}/wp-content/uploads/`,

        processPostTypes: ["Page", "Post"],
        graphqlTypeName: "WPGraphQL",
        generateWebp: true,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "WPGraphQL",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wpgraphql",
        // Url to query from
        url: `${process.env.API_PROTOCOL}://${process.env.API_URL}/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `${process.env.API_PROTOCOL}://${process.env.API_URL}`,
        sitemap: `${process.env.API_PROTOCOL}://${process.env.API_URL}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        // trackingId: `UA-133562630-2`,
        trackingId: `G-1T0JCF8BXT`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
