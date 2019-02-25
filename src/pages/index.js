import React from 'react';
import GlobalWrapper from '../../GlobalWrapper';
import HomepageContent from '../components/HomepageContent';
import { SkipToContent, GridContainerStyle } from '../components/Styles';
import '../css/base.css';

class IndexPage extends React.Component {
  render() {
    return (
      <GlobalWrapper>
        <div>
          <SkipToContent href="#maincontent" tabIndex="0">Skip to content</SkipToContent>
          <GridContainerStyle>
            <HomepageContent />
          </GridContainerStyle>
        </div>
      </GlobalWrapper>
    );
  }
}

export default IndexPage;
