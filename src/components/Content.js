import React from 'react';
import { H2Style, PStyle } from './Styles';

class Content extends React.Component {
  render() {
    const { title, copy } = this.props;
    return (
      <React.Fragment>
        <H2Style>{ title }</H2Style>
        <PStyle>{ copy }</PStyle>
      </React.Fragment>
    );
  }
}

export default Content;
