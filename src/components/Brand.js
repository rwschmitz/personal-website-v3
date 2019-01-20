import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { BrandStyle, H1Style, H2Style } from './Styles';

class Brand extends React.Component {
  render() {

    const { isBrandAtTop, brandRef } = this.props;

    const active = {
      background: 'rgba(95, 75, 139, 1)',
      borderBottomRadii: '10px',
      left: 'auto',
      paddingLeft: '2rem',
      paddingRight: '2rem',
      paddingTop: '1rem',
      position: 'sticky',
      top: 0,
      zIndex: 2
    }

    const resting = {
      paddingLeft: '2rem',
      paddingRight: '2rem',
      paddingTop: '1rem'
    }

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
          <BrandStyle ref={ brandRef } brandTopStyles={ isBrandAtTop === true ? active : resting }>
            <H1Style>{ data.contentfulBrand.brandName }</H1Style>
            <H2Style>{ data.contentfulBrand.brandTitle }</H2Style>
          </BrandStyle>
        )}
      />
    )
  }
}

export default Brand;
