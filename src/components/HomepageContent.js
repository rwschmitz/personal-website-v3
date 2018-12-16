import React from 'react';
import Nav from './Nav';
import Brand from './Brand';
import Content from './Content';
import Social from './Social';
import '../css/page.css';

class HomepageContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Brand />
        <Nav />
        <Content />
        <Social />
      </React.Fragment>
    );
  }
}

export default HomepageContent;
