import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

var employmentButtonStyle = {
  backgroundColor: "black",
  borderStyle: "solid",
  borderColor: "#E9287A",
  borderWidth: "1px",
  backgroundColor: "#E9287A",
  color: "black",
  padding: "5px 25px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "32px",
  fontWeight: "bold",
  textTransform: "uppercase",
  cursor: "pointer"
}

var hover = {
  backgroundColor: "red"
}


var projectsButtonStyle = {
    backgroundColor: "black",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: "1px",
    color: "white",
    padding: "5px 50px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "32px",
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer"
}

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  onHover() {
    // console.log("OnHover")
    // this.setState({ hover: true })
  }

  onHoverOff() {
    // console.log("HoverOff")
    // this.setState({ hover: false })
  }

  render() {
    return (
        <button style= { this.state.hover ? eval("hover") : eval(this.props.cssClass) } onMouseOver={ this.onHover() } onMouseLeave={ this.onHoverOff() } onClick={console.log("hi")}>{this.props.name}</button>
    );
  }
}
