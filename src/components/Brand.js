import React from 'react';
import styled from 'styled-components';


class Brand extends React.Component {
  render() {

    const BrandStyle = styled.section`
      display: block;
      font-family: 'Fira Sans', sans-serif;
      width: 100%;
    `;

    const HeadlineStyle = styled.h1`
      font-size: 32px;
      font-weight: 800;
      line-height: 56px;
      margin: 0;
      padding: 0;
    `

    const SubheadlineStyle = styled.h2`
      font-size: 16px;
      font-weight: 300;
      line-height: 27px;
      margin: 0;
      padding: 0;
    `

    return (
      <BrandStyle>
        <HeadlineStyle>Rudolph Schmitz</HeadlineStyle>
        <SubheadlineStyle>Web Developer</SubheadlineStyle>
      </BrandStyle>
    );
  }
}

export default Brand;
