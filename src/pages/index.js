import React from 'react';
import { SkipToContent, GridContainerStyle } from '../components/Styles';
import HomepageContent from '../components/HomepageContent';
import '../css/base.css';

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <SkipToContent href="#maincontent" tabIndex="0">Skip to content</SkipToContent>
        <GridContainerStyle>
          <HomepageContent />
        </GridContainerStyle>
      </div>
    );
  }
}

export default IndexPage;
