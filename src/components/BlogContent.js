import React from 'react';
import PropTypes from 'prop-types';
import GlobalWrapper from '../../GlobalWrapper';
import Brand from './Brand';
import Burger from './Burger';
import Nav from './Nav';
import Social from './Social';
import { BlogHeadline, ContainerStyle, GridContainerStyle, PStyle } from './Styles';
import '../css/page.css';

class BlogContent extends React.Component {
  render() {
    const { pageContext: { copy, title } } = this.props;
    return (
      <GlobalWrapper>
        <GridContainerStyle id="maincontent">
          <Brand />
          <Burger />
          <Nav />
          <ContainerStyle>
            <BlogHeadline>{ title }</BlogHeadline>
            <PStyle dangerouslySetInnerHTML={{ __html: copy }} />
          </ContainerStyle>
          <Social />
        </GridContainerStyle>
      </GlobalWrapper>
    );
  }
}

export default BlogContent;

BlogContent.propTypes = {
  pageContext: PropTypes.objectOf(PropTypes.string.isRequired, PropTypes.string.isRequired).isRequired
}
