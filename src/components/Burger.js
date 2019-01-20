import React from 'react';
import { BurgerWrapperStyle, BurgerContainerStyle, BurgerLineStyle } from './Styles';

class Burger extends React.Component {
  render() {

    const { isBrandAtTop } = this.props;

    const active = {
      background: 'rgba(95, 75, 139, 1)',
    }

    const resting = {
      background: 'transparent'
    }

    return (
      <BurgerWrapperStyle brandTopStyles={ isBrandAtTop === true ? active : resting }>
        <BurgerContainerStyle>
          <BurgerLineStyle />
          <BurgerLineStyle />
          <BurgerLineStyle />
        </BurgerContainerStyle>
      </BurgerWrapperStyle>
    );
  }
}

export default Burger;
