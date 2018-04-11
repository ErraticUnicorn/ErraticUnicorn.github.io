import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Triangle from './triangle'


var sectionStyle = {
  backgroundColor: "black",
  backgroundSize: "cover",
  width: "auto",
  height: "100vh",
  textAlign: "center",
  padding: '20px'
}

export default class HomeSection extends React.Component {
  render() {
    return (
      <section style={ sectionStyle }>
        <div id='contentContainer'>
          <div id='titleText'>
            <div id='header'>David Wert</div>
            <div id='subheader'>Welcome to my Website</div>
          </div>
          <div id='buttonContainer'>
            <button onClick={console.log("hi")}>Projects</button>
            <button onClick={console.log("hi")}>Employment</button>
          </div>
        </div>
      </section>
    );
  }
}
