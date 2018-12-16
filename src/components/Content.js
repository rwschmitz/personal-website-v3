import React from 'react';
import PropTypes from 'prop-types';
import { ContainerStyle, H2Style, PStyle } from './Styles';

class Content extends React.Component {
  render() {
    const { title, copy } = this.props;
    return (
      <ContainerStyle>
        <H2Style>{ title }</H2Style>
        <PStyle>{ copy }</PStyle>
      </ContainerStyle>
    );
  }
}

export default Content;

Content.defaultProps = {
  title: ''
}

Content.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string.isRequired
}
