import React from 'react';
import PropTypes from 'prop-types';
import { BurgerWrapperStyle, BurgerContainerStyle, BurgerLineStyle } from './Styles';

class Burger extends React.Component {
  render() {

    const { isBrandAtTop, isMenuOpen, toggleMenu } = this.props;

    return (
      <BurgerWrapperStyle brandTopStyles={ isBrandAtTop }>
        <BurgerContainerStyle isMenuOpen={ isMenuOpen } onClick={ toggleMenu }>
          <BurgerLineStyle isMenuOpen={ isMenuOpen } />
          <BurgerLineStyle isMenuOpen={ isMenuOpen } />
          <BurgerLineStyle isMenuOpen={ isMenuOpen } />
        </BurgerContainerStyle>
      </BurgerWrapperStyle>
    );
  }
}

export default Burger;

Burger.propTypes = {
  isBrandAtTop: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
}
