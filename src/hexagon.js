import React from 'react';
import ReactDOM from 'react-dom';
import ReactHexagon from 'react-hexagon'

var hexagonStyle = {
  fill: 'white',
  stroke: 'white',
}

export default class Hexagon extends React.Component {
  render() {
    return (
      <ReactHexagon style={ hexagonStyle }/>
    );
  }
}
