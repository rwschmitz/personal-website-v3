import React from 'react';
import Body from '../components/Body';
import '../css/base.css';


class IndexPage extends React.Component {
  render() {
    return (
      <Body>
        { this.props.children }
      </Body>
    );
  }
}

export default IndexPage;
