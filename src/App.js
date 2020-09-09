// @flow

import React from 'react';
import logo from './logo.svg';
import MyComponent from './MyComponent';
import MyComponentWithFlow from './MyComponentWithFlow';

import './App.css';

function App() {
  return (
    <div className="App">
      <MyComponent foo={1} bar="kumar"/>
      <MyComponentWithFlow foo="one" bar="kumar"/>
    </div>
  );
}

export default App;
