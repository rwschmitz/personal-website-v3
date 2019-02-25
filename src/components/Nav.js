import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { GlobalContext } from '../../GlobalWrapper';
import { NavStyle } from './Styles';

class Nav extends React.Component {
  render() {
    return (
      <GlobalContext.Consumer>
        { (context) => (
          <NavStyle isMenuOpen={ context.state.isMenuOpen }>
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
                      <Link key={ edge.node.navLink } activeStyle={{ opacity: 1 }} to={ edge.node.navLink.toLowerCase() === `home` ? `/` : `/${edge.node.navLink.toLowerCase()}/` }>{ edge.node.navLink }</Link>
                    </li>))
                  }
                </ul>
              )
              }
            />
          </NavStyle>
        )}
      </GlobalContext.Consumer>
    );
  }
}

export default Nav;
