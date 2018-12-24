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
    isBrandAtTheTop: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setBrandState);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setBrandState);
  }

  /**
   * Look for brand container and watch for it to reach the top of the browser window
   * 
   * @function getBrandPosition
   * @return {Number}
   */
  getBrandPosition = () => {
    if(this.brandStyleRef.current !== null) {
      return this.brandStyleRef.current.getBoundingClientRect().top;
    }
    return null;
  }

  /**
   * Check position of brand container and change state based on current location
   * Calls @getBrandPosition
   * 
   * @function setBrandState
   */
  setBrandState = () => {
    const { isBrandAtTheTop } = this.state;
    if(this.getBrandPosition() <= 0) {
      this.setState({
        isBrandAtTheTop: true
      })
    }

    if(isBrandAtTheTop === true && window.pageYOffset === 0) {
      this.setState({
        isBrandAtTheTop: false
      });
    }
  }

  render() {
    this.brandStyleRef = React.createRef();
    const { isBrandAtTheTop } = this.state;
    return (
      <React.Fragment>
        <Brand isBrandAtTheTop={ isBrandAtTheTop } brandStyleRef={ this.brandStyleRef } />
        <Burger isBrandAtTheTop={ isBrandAtTheTop } />
        <Nav isBrandAtTheTop={ isBrandAtTheTop } />
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
