const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/components/BlogContent.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  return graphql(`
  {
    blogPostCopy: allContentfulBlogPost {
      edges {
        node {
          blogPostTitle
          childContentfulBlogPostBlogPostCopyRichTextNode {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  }`).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.blogPostCopy.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `blog/${edge.node.blogPostTitle.replace(/\s+/g, '-').toLowerCase()}`,
        component: blogPostTemplate,
        context: {
          title: edge.node.blogPostTitle,
          copy: edge.node.childContentfulBlogPostBlogPostCopyRichTextNode.childContentfulRichText.html
        },
      })
    })
  })
}