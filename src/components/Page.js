import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Brand from '../components/Brand';
import Copy from '../components/Copy';
import '../css/page.css';

class Page extends React.Component {
  render() {

    const Page = styled.section`
      color: #fff;
      font-family: 'Montserrat', sans-serif;
      margin: 0 auto;
      max-width: 1600px;
      @media (min-width: 800px) {
        padding: ${90/16}rem ${160/16}rem;
      }
    `;

    return (
      <Page>
        <Brand />
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
      </Page>
    );
  }
}

export default Page;