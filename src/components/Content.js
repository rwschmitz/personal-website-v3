import React from 'react';
import { H1Style, PStyle } from './Styles';

class Content extends React.Component {
  render() {
    const { title, copy } = this.props;
    return (
      <React.Fragment>
        <H1Style>{ title }</H1Style>
        <PStyle>{ copy }</PStyle>
      </React.Fragment>
    );
  }
}

export default Content;
