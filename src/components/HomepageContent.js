import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Brand from './Brand';
import Nav from './Nav';
import Burger from './Burger';
import Content from './Content';
import Social from './Social';
import '../css/page.css';

class HomepageContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Brand />
        <Burger />
        <Nav />
        <StaticQuery
          query={ graphql`
            {
              allContentfulPageHomepageCopyRichTextNode {
                edges {
                  node {
                    childContentfulRichText {
                      html
                    }
                  }
                }
              }
            }`
          }
          render={ data => (
            data.allContentfulPageHomepageCopyRichTextNode.edges.map(edge => (
              <Content
                key={ edge.node.childContentfulRichText.html  }
                copy={ edge.node.childContentfulRichText.html }
              />
            )))
          }
        />
        <Social />
      </React.Fragment>
    );
  }
}

export default HomepageContent;
