import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { BrandStyle, H1Style, H2Style } from './Styles';

class Brand extends React.Component {
  render() {
    const { brandStyleRef, isBrandAtTheTop } = this.props;

    const brandActiveStyles = {
      background: 'rgba(95,75,139,1)',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      boxShadow: '0px 0px 30px 5px rgba(0, 0, 0, 0.1)',
      left: '50%',
      paddingLeft: '2rem',
      paddingTop: '1rem',
      position: 'fixed',
      translateX: 'translateX(-50%)',
      top: 0,
    }

    const brandRestingStyles = {
      position: 'relative'
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
          <BrandStyle ref={ brandStyleRef } brandTopStyles={ isBrandAtTheTop === false ? brandRestingStyles : brandActiveStyles }>
            <H1Style>{ data.contentfulBrand.brandName }</H1Style>
            <H2Style>{ data.contentfulBrand.brandTitle }</H2Style>
          </BrandStyle>
        )}
      />
    )
  }
}

export default Brand;

Brand.propTypes = {
  isBrandAtTheTop: PropTypes.bool.isRequired,
  brandStyleRef: PropTypes.shape().isRequired
}
