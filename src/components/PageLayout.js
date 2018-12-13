import React from 'react';
import styled from 'styled-components';
import Brand from './Brand';
import '../css/page.css';

class PageLayout extends React.Component {
  render() {

    const PageLayoutWrapper = styled.div`
      background-image: linear-gradient(to right, rgba(84, 73, 210, 1) 5%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(to left, rgba(84, 73, 210, 1) 5%, rgba(255, 255, 255, 0.1) 100%);
      height: 100vh;
      max-height: 100%;
    `;

    return (
      <PageLayoutWrapper>
        <Brand />
      </PageLayoutWrapper>
    );
  }
}

export default PageLayout;
