import React from 'react';
import PropTypes from 'prop-types';
import Content from './Content';
import '../css/page.css';

class BlogContent extends React.Component {
  render() {
    const { blogTitle, blogCopy } = this.props;
    return (
      <Content
        title={ blogTitle }
        copy={ blogCopy }
      />
    );
  }
}

export default BlogContent;

BlogContent.propTypes = {
  blogTitle: PropTypes.string.isRequired,
  blogCopy: PropTypes.string.isRequired
}
