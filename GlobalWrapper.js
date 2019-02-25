import React from 'react';

export const GlobalContext = React.createContext();

class GlobalWrapper extends React.Component {
  
  state = {
    isBrandAtTop: false,
    isMenuOpen: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkTop);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkTop);
  }

  checkTop = () => {
    this.setState({
      isBrandAtTop: false
    });

    if(this.brandRef.current.getBoundingClientRect().top <= 0) {
      this.setState({
        isBrandAtTop: true
      });
    }
  }

  toggleMenu = () => {
    const { isMenuOpen } = this.state;
    this.setState({
      isMenuOpen: !isMenuOpen
    });
  }
  
  render() {
    const { children } = this.props;
    this.brandRef = React.createRef();
    return (
      <GlobalContext.Provider value={ { state: this.state, brandRef: this.brandRef, toggleMenu: this.toggleMenu } }>
        { children }
      </GlobalContext.Provider>
    )
  }
}

export default GlobalWrapper;
