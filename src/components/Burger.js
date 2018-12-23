import React from 'react';
import { BurgerContainerStyle, BurgerLineStyle } from './Styles';

class Burger extends React.Component {
  render() {
    return (
      <BurgerContainerStyle>
        <BurgerLineStyle />
        <BurgerLineStyle />
        <BurgerLineStyle />
      </BurgerContainerStyle>
    );
  }
}

export default Burger;
