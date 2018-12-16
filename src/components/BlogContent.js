import React from 'react';
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