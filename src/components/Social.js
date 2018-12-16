import React from 'react';
import styled from 'styled-components';

class Social extends React.Component {
  render() {

    const SocialStyle = styled.div`
      grid-area: social;
    `;

    return (
      <SocialStyle>
        <p>social</p>
      </SocialStyle>
    );
  }
}

export default Social;
