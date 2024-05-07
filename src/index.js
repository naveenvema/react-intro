// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './App1';
import Feedback1 from './Feedback1';
import Feedback2 from './Feedback2';
import Feedback3 from './Feedback3';
import Feedback4 from './Feedback4';

const App = () => {
  const path = window.location.pathname;
  switch (path) {
    case '/':
      return <App1 />;
    case '/feedback1':
      return <Feedback1 />;
    case '/feedback2':
      return <Feedback2 />;
    case '/feedback3':
      return <Feedback3 />;
    case '/feedback4':
      return <Feedback4 />;
    default:
      return <App1 />;
  }
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
