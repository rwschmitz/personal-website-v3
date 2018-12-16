import React from 'react';
import { SocialStyle } from './Styles';
import Twitter from '../images/twitter.svg';
import LinkedIn from '../images/linkedin.svg';
import Github from '../images/github.svg';

class Social extends React.Component {
  render() {
    return (
      <SocialStyle>
        <li><img src={ Twitter } alt="Follow me on Twitter!" /></li>
        <li><img src={ LinkedIn } alt="Connect with me on LinkedIn!" /></li>
        <li><img src={ Github } alt="Follow me on Github!" /></li>
      </SocialStyle>
    );
  }
}

export default Social;
