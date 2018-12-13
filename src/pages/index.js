import React from 'react';
import PageLayout from '../components/PageLayout';
import HomepageContent from '../components/HomepageContent';
import '../css/base.css';

class IndexPage extends React.Component {
  render() {
    return (
      <PageLayout>
        <HomepageContent />
      </PageLayout>
    );
  }
}

export default IndexPage;
