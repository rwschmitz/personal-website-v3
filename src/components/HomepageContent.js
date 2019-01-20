import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Brand from './Brand';
import Nav from './Nav';
import Burger from './Burger';
import Content from './Content';
import Social from './Social';
import '../css/page.css';

class HomepageContent extends React.Component {

  state = {
    isBrandAtTop: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkTop);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkTop);
  }

  checkTop = () => {
    this.setState({
      isBrandAtTop: false
    });

    if(this.brandRef.current.getBoundingClientRect().top <= 0) {
      this.setState({
        isBrandAtTop: true
      });
    }
  }


  render() {

    this.brandRef = React.createRef();

    const { isBrandAtTop } = this.state;

    return (
      <React.Fragment>
        <Brand isBrandAtTop={ isBrandAtTop } brandRef={ this.brandRef } />
        <Burger isBrandAtTop={ isBrandAtTop } brandRef={ this.brandRef } />
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
