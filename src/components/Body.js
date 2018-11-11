import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import '../css/page.css';


class Body extends React.Component {
  render() {

    const Body = styled.section`
      background: linear-gradient(119.36deg, #5449D2 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(240.64deg, #5449D2 0%, rgba(255, 255, 255, 0) 100%), #5449D2;
      flex-wrap: wrap;
      height: 100vh;
    `;

    return (
      <Body>
        <Page />
      </Body>
    );
  }
}

export default Body;
