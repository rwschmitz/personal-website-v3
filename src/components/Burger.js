import React from 'react';
import PropTypes from 'prop-types';
import { BurgerContainerStyle, BurgerLineStyle } from './Styles';

class Burger extends React.Component {
  render() {
    const { isBrandAtTheTop } = this.props;
    
    const burgerActiveStyles = {
      position: 'fixed',
      right: '1.65rem',
      top: '1.65rem',
      zIndex: '3'
    }
    const burgerRestingStyles = {
      position: 'relative'
    }
    return (
      <BurgerContainerStyle burgerTopStyles={ isBrandAtTheTop === false ? burgerRestingStyles : burgerActiveStyles }>
        <BurgerLineStyle />
        <BurgerLineStyle />
        <BurgerLineStyle />
      </BurgerContainerStyle>
    );
  }
}

export default Burger;

Burger.defaultProps = {
  isBrandAtTheTop: false
}

Burger.propTypes = {
  isBrandAtTheTop: PropTypes.bool
}
