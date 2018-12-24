import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import { NavStyle } from './Styles';

class Nav extends React.Component {
  render() {

    const { isBrandAtTheTop } = this.props;

    const navActiveStyles = {
      animation: 'translateY(-35%) rotate(90deg)',
      childrenDisplay: 'none',
      childrenMarginTop: '2rem',
      childrenRotate: 'rotate(-90deg)',
      childrenTextAlign: 'center',
      position: 'fixed',
      right: '25%',
      top: 0,
      zIndex: '3'
    }

    const navRestingStyles = {
      position: 'relative'
    }

    return (
      <NavStyle navTopStyles={ isBrandAtTheTop === false ? navRestingStyles : navActiveStyles }>
        <StaticQuery
          query={ graphql`
            query {
              allContentfulNavLink {
                edges {
                  node {
                    navLink
                  }
                }
              }
            }`
          }
          render={ data => (
            <ul>
              { data.allContentfulNavLink.edges.map(edge => (
                <li key={ edge.node.navLink }>
                  <Link key={ edge.node.navLink } activeStyle={{ opacity: 1 }} to={`/${edge.node.navLink.toLowerCase()}/`}>{ edge.node.navLink }</Link>
                </li>))
              }
            </ul>
          )
          }
        />
      </NavStyle>
    );
  }
}

export default Nav;

Nav.defaultProps = {
  isBrandAtTheTop: false
}

Nav.propTypes = {
  isBrandAtTheTop: PropTypes.bool
}
