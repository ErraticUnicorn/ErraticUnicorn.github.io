import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import HexagonColumn from './hexagonColumn'
import DavidSection from './david'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Background from './images/background.jpg';

var sectionStyle = {
  background: `url(${Background}) no-repeat center center fixed`,
  backgroundSize: "cover",
  width: "auto",
  height: "100vh"
}

var hexagonContainerStyle = {
  width: "125%",
  height: "auto",
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
      <Router>
      <div>
          <Link to={`/David`}>
            Link
          </Link>
          <Route path="/david" component={DavidSection}/>
          <Route exact={true} path="/" render ={() => (
            <section style={ sectionStyle }>
              <div section id='hexagon-container' style = { hexagonContainerStyle }>
                <HexagonColumn value={1}/>
                <HexagonColumn value={2}/>
                <HexagonColumn value={3}/>
                <HexagonColumn value={4}/>
                <HexagonColumn value={5}/>
                <HexagonColumn value={0}/>
                <HexagonColumn value={7}/>
                <HexagonColumn value={8}/>
                <HexagonColumn value={9}/>
              </div>
            </section>
          )}/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Section />, document.getElementById('root'))
registerServiceWorker();
