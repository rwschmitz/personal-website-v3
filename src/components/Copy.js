import React from 'react';
import styled from 'styled-components';


class Copy extends React.Component {
  render() {

    const TitleStyle = styled.h2`
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      line-height: 44px;
      margin: 0 auto;
      max-width: 640px;
      width: 100%;
    `;
    const CopyStyle = styled.p`
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      line-height: 44px;
      margin: 0 auto;
      max-width: 640px;
      width: 100%;
    `;

    const { copy, title } = this.props;

    return (
      <React.Fragment>
        <TitleStyle>
          { title }
        </TitleStyle>
        <CopyStyle>
          { copy }
        </CopyStyle>
      </React.Fragment>
    );
  }
}

export default Copy;
