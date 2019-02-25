import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import GlobalWrapper from '../../GlobalWrapper';
import Brand from '../components/Brand';
import Burger from '../components/Burger';
import Nav from '../components/Nav';
import Social from '../components/Social';
import { GridContainerStyle } from '../components/Styles';
import '../css/base.css';

class Blog extends React.Component {
  render() {
    return (
      <GlobalWrapper>
        <div>
          <GridContainerStyle>
            <Brand />
            <Burger />
            <Nav />
            <StaticQuery
              query={ graphql`
                query {
                  allContentfulBlogPost {
                    edges {
                      node {
                        blogPostTitle
                        contentful_id
                      }
                    }
                  }
                }
              `}
              render={data => (
                <ul>
                  {data.allContentfulBlogPost.edges.map(edge =>
                  (
                    <li key={ edge.node.contentful_id }>
                      <Link key={ edge.node.contentful_id } to={ `blog/${edge.node.blogPostTitle.replace(/\s+/g, '-').toLowerCase()}`}>
                        { edge.node.blogPostTitle }
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            />
            <Social />
          </GridContainerStyle>
        </div>
      </GlobalWrapper>
    );
  }
}

export default Blog;
