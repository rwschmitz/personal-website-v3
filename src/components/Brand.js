import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { BrandStyle, H1Style, H2Style } from './Styles';

class Brand extends React.Component {
  render() {
    return (
      <StaticQuery
        query={ graphql`
          query {
            contentfulBrand {
              brandName
              brandTitle
            }
          }`
        }
        render={ data => (
          <BrandStyle>
            <H1Style>{ data.contentfulBrand.brandName }</H1Style>
            <H2Style>{ data.contentfulBrand.brandTitle }</H2Style>
          </BrandStyle>
        )}
      />
    )
  }
}

export default Brand;
