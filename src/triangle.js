import React from 'react';
import ReactDOM from 'react-dom';

var leftTriangleStyle = {
  width: "0",
  height: "0",
  borderStyle: "solid",
  borderWidth: "25px 0 0 25px",
  borderColor: "transparent transparent transparent #007bff"
}

var rightTriangleStyle = {
  width: "0",
  height: "0",
  borderStyle: "solid",
  borderWidth: "0 0 25px 25px",
  borderColor: "transparent transparent #007bff transparent"
}

var bottomTriangleStyle = {
  width: "0",
  height: "0",
  borderStyle: "solid",
  borderWidth: "30px 25px 0 25px",
  borderColor: "#007bff transparent transparent transparent"
}

export default class Triangle extends React.Component {
  constructor() {
    super();
    this.state = { triangleType: "rightTriangleStyle" }
  }

  render() {
    if(this.props.triangleType== "rightTriangleStyle") {
      return (
        <div id='triangle' style={ rightTriangleStyle }/>
      );
    } else if (this.props.triangleType == "leftTriangleStyle") {
      return (
        <div id='triangle' style={ leftTriangleStyle }/>
      );
    } else {
      return (
        <div id='triangle' style={ bottomTriangleStyle }/>
      );
    }
  }
}
