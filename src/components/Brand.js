import React from 'react';
import styled from 'styled-components';


class Brand extends React.Component {
  render() {

    const Brand = styled.section`
      display: block;
      font-family: 'Fira Sans', sans-serif;
      padding: 2rem 2rem 14.5rem 2rem;
      width: 100%;
    `;

    const Headline = styled.h1`
      font-size: 32px;
      font-weight: 800;
      line-height: 56px;
      margin: 0;
      padding: 0;
    `

    const Subheadline = styled.h2`
      font-size: 16px;
      font-weight: 300;
      line-height: 27px;
      margin: 0;
      padding: 0;
    `

    return (
      <Brand>
        <Headline>Rudolph Schmitz</Headline>
        <Subheadline>Web Developer</Subheadline>
      </Brand>
    );
  }
}

export default Brand;
