import React from 'react';
import Brand from './Brand';
import Nav from './Nav';
import Content from './Content';
import Burger from './Burger';
import Social from './Social';
import '../css/page.css';

class HomepageContent extends React.Component {

  // state = {
  //   isBrandAtTop: false,
  //   isMenuOpen: false
  // }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.checkTop);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.checkTop);
  // }

  // checkTop = () => {
  //   this.setState({
  //     isBrandAtTop: false
  //   });

  //   if(this.brandRef.current.getBoundingClientRect().top <= 0) {
  //     this.setState({
  //       isBrandAtTop: true
  //     });
  //   }
  // }

  // toggleMenu = () => {
  //   const { isMenuOpen } = this.state;
  //   this.setState({
  //     isMenuOpen: !isMenuOpen
  //   });
  // }


  render() {

    // this.brandRef = React.createRef();

    // const { isBrandAtTop, isMenuOpen } = this.state;

    return (
      <React.Fragment>
        <Brand />
        <Burger />
        <Nav />
        <Content />
        <Social />
      </React.Fragment>
    );
  }
}

export default HomepageContent;
