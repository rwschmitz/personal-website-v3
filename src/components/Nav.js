import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { NavStyle } from './Styles';

class Nav extends React.Component {
  render() {
    return (
      <NavStyle>
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
                  <Link activeStyle={{ opacity: 1 }} to={`/${edge.node.navLink.toLowerCase()}/`}>{ edge.node.navLink }</Link>
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
