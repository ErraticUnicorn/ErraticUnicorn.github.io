import React from 'react';
import ReactDOM from 'react-dom';
import Hexagon from './hexagon';
import HexagonButton from './hexagonButton';

var width = "20%"
var marginLeft = "-87px"
var hexagonColumnOdd = {
  width: width,
  height: "100vh",
  marginLeft: marginLeft
}

var hexagonColumnEven = {
  width: width,
  height: "100vh",
  marginLeft: marginLeft,
  marginTop: "-132px"
}

export default class HexagonColumn extends React.Component {
  constructor() {
    super();
    this.state = { disappear: false }
  }
  onChildChanged(newState) {
    this.setState({ disappear: newState })
    console.log("Hi")
    ReactDOM.findDOMNode(this).classList.add("hidden");
  }

  render() {
    if(this.props.value == 0) {
      return (
        <div id='hexagon-column' style = { hexagonColumnEven }>
          <Hexagon/>
          <HexagonButton callbackParent={(newState) => this.onChildChanged(newState)}/>
          <Hexagon/>
          <Hexagon/>
        </div>
      );
    } else if(this.props.value % 2 == 1) {
      return (
          <div id='hexagon-column' style = { hexagonColumnOdd }>
            <Hexagon/>
            <Hexagon/>
            <Hexagon/>
            <Hexagon/>
          </div>
      );
    } else {
      return (
        <div id='hexagon-column' style = {hexagonColumnEven }>
          <Hexagon/>
          <Hexagon/>
          <Hexagon/>
          <Hexagon/>
        </div>
      );
    }
  }
}
