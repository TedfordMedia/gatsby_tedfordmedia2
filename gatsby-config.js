/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require("path");
module.exports = {
  siteMetadata: {
    title: `test-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },

  plugins: ["gatsby-plugin-sitemap", "gatsby-plugin-mdx", {
    resolve: 'gatsby-plugin-alias-imports',
    options: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        // "@helpers": path.resolve(__dirname, "src/helpers"),
        // "@images": path.resolve(__dirname, "static/images"),
        // "@models": path.resolve(__dirname, "static/models"),
        // "@styles": path.resolve(__dirname, "src/styles"),
        // "react-dom": "@hot-loader/react-dom",
      },
      extensions: []
    },
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};