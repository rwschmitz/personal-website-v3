import React from 'react';
import styled from 'styled-components';


class Copy extends React.Component {
  render() {

    const Copy = styled.p`
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      line-height: 44px;
      margin: 0 auto;
      max-width: 640px;
    `;

    const { content } = this.props;

    const renderParagraphs = content => {
      content.map(item => <Copy>{ item }</Copy>)
    }

    return (
      <React.Fragment>
        { renderParagraphs(content) }
      </React.Fragment>
    );
  }
}

export default Copy;
