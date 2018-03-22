import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

var davidTarget = {
  list: function () {
    ReactDOM.render(<Section />, document.getElementById('root'));
    registerServiceWorker();
  });
}
