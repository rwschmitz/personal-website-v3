import React from 'react';
import PropTypes from 'prop-types';
import Brand from './Brand';
import Nav from './Nav';
import Social from './Social';
import { BlogHeadline, ContainerStyle, GridContainerStyle, PStyle } from './Styles';
import '../css/page.css';

class BlogContent extends React.Component {
  render() {
    const { pageContext: { copy, title } } = this.props;
    return (
      <GridContainerStyle id="maincontent">
        <Brand />
        <Nav />
        <ContainerStyle>
          <BlogHeadline>{ title }</BlogHeadline>
          <PStyle dangerouslySetInnerHTML={{ __html: copy }} />
        </ContainerStyle>
        <Social />
      </GridContainerStyle>
    );
  }
}

export default BlogContent;

BlogContent.propTypes = {
  pageContext: PropTypes.objectOf(PropTypes.string.isRequired, PropTypes.string.isRequired).isRequired
}
