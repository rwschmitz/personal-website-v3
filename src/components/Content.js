import React from 'react'
import { GlobalContext } from '../../GlobalWrapper';

class Content extends React.Component {
  render() {
    return (
      <div>
        <GlobalContext.Consumer>
          { (context) => (
            <p>{ context.state.name }</p>
          )}
        </GlobalContext.Consumer>
      </div>
    )
  }
}

export default Content;
