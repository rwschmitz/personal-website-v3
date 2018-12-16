import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { WrapperStyle, GridContainerStyle } from '../components/Styles';
import BlogContent from '../components/BlogContent';
import '../css/base.css';

class Blog extends React.Component {
  render() {
    return (
      <WrapperStyle>
        <GridContainerStyle>
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
        </GridContainerStyle>
      </WrapperStyle>
    );
  }
}

export default Blog;
