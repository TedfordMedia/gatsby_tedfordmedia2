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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/
        }
      }
    },
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
          "@src": path.resolve(__dirname, "src"),
          "@styles": path.resolve(__dirname, "src/styles"),
          "@images": path.resolve(__dirname, "src/images"),
        },
        extensions: []
      }
    }
  ]
};
