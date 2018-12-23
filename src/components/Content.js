import React from 'react';
import PropTypes from 'prop-types';
import { ContainerStyle, H2Style, PStyle } from './Styles';

class Content extends React.Component {
  render() {
    const { title, copy } = this.props;
    return (
      <ContainerStyle id="maincontent">
        <H2Style>{ title }</H2Style>
        <PStyle dangerouslySetInnerHTML={{ __html: copy }}></PStyle>
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
