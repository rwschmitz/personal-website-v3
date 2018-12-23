import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GridContainerStyle } from '../components/Styles';
import Brand from '../components/Brand';
import Nav from '../components/Nav';
import Social from '../components/Social';
import BlogContent from '../components/BlogContent';
import '../css/base.css';

class Blog extends React.Component {
  render() {
    return (
      <div>
        <GridContainerStyle>
          <Brand />
          <Nav />
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
              <BlogContent
                blogTitle={ data.contentfulBlogPost.blogPostTitle }
                blogCopy={ data.contentfulBlogPost.blogPostCopy.blogPostCopy }
              />
            )}
          />
          <Social />
        </GridContainerStyle>
      </div>
    );
  }
}

export default Blog;
