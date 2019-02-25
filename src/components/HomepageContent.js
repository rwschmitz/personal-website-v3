import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Brand from './Brand';
import Nav from './Nav';
import Content from './Content';
import Burger from './Burger';
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
            query {
              allContentfulPage {
                edges {
                  node {
                    childContentfulPageHomepageCopyRichTextNode {
                      childContentfulRichText {
                        html
                      }
                    }
                  }
                }
              }
            }
          `}
          render={data => (
            data.allContentfulPage.edges.map(edge => (
              <Content copy={ edge.node.childContentfulPageHomepageCopyRichTextNode.childContentfulRichText.html} />
            ))
          )}
        />
        <Content />
        <Social />
      </React.Fragment>
    );
  }
}

export default HomepageContent;
