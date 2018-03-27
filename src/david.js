import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Triangle from './triangle'


var sectionStyle = {
  backgroundColor: "white",
  backgroundSize: "cover",
  width: "auto",
  height: "100vh",
  textAlign: "center",
  padding: '20px'
}

var outerBorderStyle = {
  height: "100%",
  borderColor: "black",
  borderStyle: "solid",
  borderWidth: "10px"
}

var innerBorderStyle = {
  marginTop: "50vh",
  marginLeft: "45%",
  marginRight: "45%",
  padding: "10px",
  borderStyle: "dashed"
}

var centerStyle = {
  paddingLeft: "45%",
  paddingRight: "45%"
}

var flex = {
  display: 'flex',
  justifyContent: 'center'
}

var enterBox = {
  backgroundColor: "blue",
  width: "49px",
  paddingTop: "10px",
  paddingBottom: "10px",
  textAlign: "center",
  marginLeft: "35%"
}

export default class DavidSection extends React.Component {
  render() {
    return (
      <section style={ sectionStyle }>
        <div id='outerBorder' style = { outerBorderStyle  }>
          <div id='innerBorder' style = { innerBorderStyle }>
            <div id='Title'>
              David Wert
            </div>
            <div id='subText'>
              Test Test
            </div>
          </div>
          <div id="enter" style = { centerStyle }>
            <div id='triangleBox' style = { flex }>
              <Triangle triangleType = 'leftTriangleStyle'/>
              <Triangle triangleType = 'rightTriangleStyle'/>
            </div>
            <div id='enterBox' style = { Object.assign({}, enterBox, flex) }>
              Enter
            </div>
            <div id='triangleBox' style = { flex }>
              <Triangle/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
