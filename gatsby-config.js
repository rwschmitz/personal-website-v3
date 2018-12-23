require("dotenv").config({
  path: `./.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Rudolph Schmitz - Web Developer',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `vnmbu19hszbp`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY}`
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `vnmbu19hszbp`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN_PREVIEW}`,
        host: `preview.contentful.com`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }
  ],
}
