import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import '../css/page.css';


class Body extends React.Component {
  render() {

    const Body = styled.section`
      background-image: linear-gradient(to right, rgba(84, 73, 210, 1) 5%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(to left, rgba(84, 73, 210, 1) 5%, rgba(255, 255, 255, 0.1) 100%);
      height: 100vh;
      max-height: 100%;
    `;

    return (
      <Body>
        <Page />
      </Body>
    );
  }
}

export default Body;
