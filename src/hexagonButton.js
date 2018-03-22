import React from 'react';
import ReactDOM from 'react-dom';
import ReactHexagon from 'react-hexagon'

var hexagonStyle = {
  fill: 'red',
  stroke: 'red',
}

var buttonStyle = {

}

export default class HexagonButton extends React.Component {
  constructor() {
    super();
    this.state = {pressed: false};
  }

  enterIndexPage() {
    this.setState({pressed: !this.state.pressed});
    this.props.callbackParent(this.state.pressed);
  }

  render() {
    return (
      <div>
        <ReactHexagon style={ hexagonStyle } viewBox = {"0 1 500 511"}>
        </ReactHexagon>
        <button onClick={() => this.enterIndexPage()} style={ buttonStyle }>
          Enter
        </button>
      </div>
    );
  }
}
