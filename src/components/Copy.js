import React from 'react';
import styled from 'styled-components';


class Copy extends React.Component {
  render() {

    const Title = styled.h2`
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      line-height: 44px;
      margin: 0 auto;
      max-width: 640px;
      width: 100%;
    `;
    const Copy = styled.p`
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      line-height: 44px;
      margin: 0 auto;
      max-width: 640px;
      width: 100%;
    `;

    const { copy, title } = this.props;
    const parsedCopy = JSON.parse(copy);

    return (
      <React.Fragment>
        <Title>
          { title }
        </Title>
        <Copy>
          { parsedCopy.content[0].content[0].value }
        </Copy>
      </React.Fragment>
    );
  }
}

export default Copy;
