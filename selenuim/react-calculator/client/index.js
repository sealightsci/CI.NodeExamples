import React from 'react'; // import React package
import ReactDOM from 'react-dom'; // import ReactDOM package
import App from './components/app'; // import our frame component
import './styles/main.css'; // import our external css file

// using the render method, we will mount this node into our DOM (html file)
// on the element with id of 'app'
ReactDOM.render(
  <App />, // mount our frame component
  document.getElementById('app')
);
