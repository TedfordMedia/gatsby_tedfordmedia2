/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require("path");

module.exports = {
  siteMetadata: {
    title: `test-gatsby`,
    siteUrl: `https://www.tedfordmedia.co.uk`
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
        },
        extensions: []
      }
    }
  ]
};
