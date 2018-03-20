import React from 'react';
import ReactDOM from 'react-dom';
import Hexagon from './hexagon';

var hexagonColumn = {
  width: "300px",
  height: "100vh",
  marginLeft: "-75px"
}

export default class HexagonColumn extends React.Component {
  render() {
    return (
      <div id='hexagon-column' style = { hexagonColumn }>
        <Hexagon/>
        <Hexagon/>
        <Hexagon/>
        <Hexagon/>
      </div>
    );
  }
}
