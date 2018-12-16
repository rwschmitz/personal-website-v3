import React from 'react';
import { WrapperStyle, GridContainerStyle } from '../components/Styles';
import HomepageContent from '../components/HomepageContent';
import '../css/base.css';

class IndexPage extends React.Component {
  render() {
    return (
      <WrapperStyle>
        <GridContainerStyle>
          <HomepageContent />
        </GridContainerStyle>
      </WrapperStyle>
    );
  }
}

export default IndexPage;
