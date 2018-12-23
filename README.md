# Rudolph Schmitz Personal Website Version 3.0

## Purpose

The purpose of this website is to have a place for:

- Showing projects and linking them up to Github code repositories.
- Maintaining a blog.
- Testing out new technology.

### Tools

- Gatsby.js
- React.js
- GraphQL
- Styled Components
- Contentful API

### Contentful Setup

- Create a Contentful account.
- Create a Contentful space.
- Generate read-only API keys to grab data from Contentful.
- Start writing content!

### Gatsbyjs Setup

- `npm install --global gatsby-cli`
- `gatsby new [yourSiteHere]`
- `cd [yourSiteHere]`
- `gatsby develop`
- Start coding!

### Linking Contentful w/ Gatsbyjs

- **IMPORTANT** - Must be using gatsbyjs version 2.0.33 or later [Github Issue #9533](https://github.com/gatsbyjs/gatsby/issues/9533)
- Create .env files for development and production.
- .env file for development should be named .env.development.
- .env file for production should be named .env.production.
- Store access tokens within these .env files.
- `npm install --save gatsby-source-contentful`.
- Configure plugin in `gatsbyjs.config.js`.  [Docs](https://www.gatsbyjs.org/packages/gatsby-source-contentful/)

## Notes

### Gatsbyjs

- To run GraphQL queries in non-page components you’ll need to use [Gatsby’s Static Query feature](https://www.gatsbyjs.org/docs/static-query/).

### Styled Components / Contentful / Netlify Gotchas

- Pulling a Contentful rich text content type into a `styled.p` component will cause nested `<p>` tags.  When the site is deployed, this will cause any nested `<p>` tags to be removed from the DOM due to invalid markup.
  - Instead, you may use a HTML element such as a `<div>`.

#### Code Philosophy

- Start with large pages and break down redundant bits of code into re-usable components

##### Contact

- Email:    Rudolph.W.Schmitz@gmail.com
- Twitter:  [@RudolphSchmitz](https://twitter.com/RudolphSchmitz)