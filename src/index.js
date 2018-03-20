import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import HexagonColumn from './hexagon-column'

import Background from './images/background.jpg';

var sectionStyle = {
  background: `url(${Background}) no-repeat center center fixed`,
  backgroundSize: "cover",
  width: "auto",
  height: "100vh"
}

var hexagonContainerStyle = {
  width: "auto",
  display: "flex"
}

var hexagonContainerEvenStyle = {
  position: "relative",
  marginTop: "-600px",
  marginLeft: "-80px"
}

class Section extends React.Component {
  render() {
    return (
      <section style={ sectionStyle }>
        <div section id='hexagon-container' style = { hexagonContainerStyle }>
          <HexagonColumn/>
          <HexagonColumn/>
        </div>
      </section>
    );
  }
}

ReactDOM.render(<Section />, document.getElementById('root'));
registerServiceWorker();
