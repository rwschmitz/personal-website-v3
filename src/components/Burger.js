import React from 'react';
import { GlobalContext } from '../../GlobalWrapper';
import { BurgerWrapperStyle, BurgerContainerStyle, BurgerLineStyle } from './Styles';

class Burger extends React.Component {
  render() {
    return (
      <GlobalContext.Consumer>
        { (context) => (
          <BurgerWrapperStyle brandTopStyles={ context.state.isBrandAtTop }>
            <BurgerContainerStyle isMenuOpen={ context.state.isMenuOpen } onClick={ context.toggleMenu }>
              <BurgerLineStyle isMenuOpen={ context.state.isMenuOpen } />
              <BurgerLineStyle isMenuOpen={ context.state.isMenuOpen } />
              <BurgerLineStyle isMenuOpen={ context.state.isMenuOpen } />
            </BurgerContainerStyle>
          </BurgerWrapperStyle>
        )}
      </GlobalContext.Consumer>
    );
  }
}

export default Burger;
