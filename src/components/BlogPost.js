import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Copy from '../components/Copy';
import '../css/page.css';

class BlogPost extends React.Component {
  render() {
    return (
        <StaticQuery
          query={ graphql`
            query {
              contentfulBlogPost {
                blogPostTitle
                blogPostCopy {
                  blogPostCopy
                }
              }
            }`
          }
        render={ data => (
          <Copy
            title={ data.contentfulBlogPost.blogPostTitle }
            copy={ data.contentfulBlogPost.blogPostCopy.blogPostCopy }
          />
        )}
        />
    );
  }
}

export default BlogPost;