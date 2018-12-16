import React from 'react';
import styled from 'styled-components';

class Nav extends React.Component {
  render() {

    const NavStyle = styled.div`
      grid-area: nav;
    `;

    return (
      <NavStyle>
        <p>nav</p>
      </NavStyle>
    );
  }
}

export default Nav;
