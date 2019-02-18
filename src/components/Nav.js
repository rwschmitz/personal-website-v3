import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import { NavStyle } from './Styles';

class Nav extends React.Component {
  render() {
    const { isMenuOpen } = this.props;
    return (
      <NavStyle isMenuOpen={ isMenuOpen }>
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
                  <Link key={ edge.node.navLink } activeStyle={{ opacity: 1 }} to={edge.node.navLink.toLowerCase() === `home` ? `/` : `/${edge.node.navLink.toLowerCase()}/`}>{ edge.node.navLink }</Link>
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

Nav.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired
}
