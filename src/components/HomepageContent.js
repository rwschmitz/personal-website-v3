import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Brand from './Brand';
import Nav from './Nav';
import Burger from './Burger';
import Content from './Content';
import Social from './Social';
import '../css/page.css';

class HomepageContent extends React.Component {
  render() {
    const document = {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          content: [
            {
              nodeType: 'text',
              marks: [],
              value: 'I am an odd paragraph.',
              data: {}
            }
          ],
          data: {}
        },
        {
          nodeType: 'paragraph',
          content: [
            {
              nodeType: 'text',
              marks: [],
              value: 'I am even.',
              data: {}
            }
          ],
          data: {}
        }
      ]
    };

    const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: node => `
          <p class='${node}'>
            ${node}
          </p>`
      }
    };

    documentToHtmlString(document, options)

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
