import React from 'react';
import styled from 'styled-components';
import '../css/page.css';

class HomepageContent extends React.Component {
  render() {

    const PageContentStyle = styled.section`
      color: #fff;
      font-family: 'Montserrat', sans-serif;
      margin: 0 auto;
      max-width: 1600px;
      @media (min-width: 800px) {
        padding: ${90/16}rem ${160/16}rem;
      }
    `;

    return (
      <PageContentStyle>
        <p>ok</p>
      </PageContentStyle>
    );
  }
}

export default HomepageContent;