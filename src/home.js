import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from './button'


var sectionStyle = {
  backgroundColor: "black",
  backgroundSize: "cover",
  width: "auto",
  height: "100vh",
  textAlign: "center",
  padding: '20px',
  font: 'MinionPro',
  fontWeight: 'bold',
  textTransform: 'uppercase'
}

var headerStyle = {
  fontSize: '120px',
  color: 'black',
  paddingTop: '15%',
  //-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white,
  textShadow: '3px 3px 0px white, 4px 4px 0px white, 5px 5px 0px white, 6px 6px 0px white, 7px 7px 0px white, 8px 8px 0px white, 9px 9px 0px white',
}

var subheaderStyle = {
  paddingTop: '10px',
  color: 'white',
  fontSize: '20px'
}

var buttonContainerStyle = {
  paddingTop: '100px',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap'
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
    textTransform: "uppercase"
}

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
}

export default class HomeSection extends React.Component {

  render() {
    return (
      <section style={ sectionStyle }>
        <div id='contentContainer'>
          <div id='titleText'>
            <div id='header' style={ headerStyle }>David Wert</div>
            <div id='subheader' style={ subheaderStyle }>Welcome to my Website!</div>
          </div>
          <div id='buttonContainer' style={ buttonContainerStyle }>
            <Button cssClass="projectsButtonStyle" name="Projects" onClick={console.log("hi")}></Button>
            <Button cssClass="employmentButtonStyle" name="Employment" onClick={console.log("hi")}></Button>
          </div>
        </div>
      </section>
    );
  }
}
