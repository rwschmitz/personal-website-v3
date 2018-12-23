import React from 'react';
import { SkipToContent, WrapperStyle, GridContainerStyle } from '../components/Styles';
import HomepageContent from '../components/HomepageContent';
import '../css/base.css';

class IndexPage extends React.Component {
  render() {
    return (
      <WrapperStyle>
        <SkipToContent href="#maincontent" tabIndex="0">Skip to content</SkipToContent>
        <GridContainerStyle>
          <HomepageContent />
        </GridContainerStyle>
      </WrapperStyle>
    );
  }
}

export default IndexPage;
