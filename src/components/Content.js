import React from 'react'
import PropTypes from 'prop-types';
import { PStyle } from './Styles';

class Content extends React.Component {
  render() {
    const { copy } = this.props;
    return (
      <PStyle dangerouslySetInnerHTML={{ __html: copy }} />
    )
  }
}

export default Content;

Content.propTypes = {
  copy: PropTypes.string.isRequired
}
