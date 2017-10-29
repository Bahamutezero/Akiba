import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigator from './Navigator.js';
import Body from './Head.js';

class App extends Component {  
  constructor() {
    super();
    this.state;
  }
  
  
  render() {
    return (
      <div>
        <div>
          <h2 className="test" id='home'>あ</h2>
          <h2 className="test">き</h2>
          <h2 className="test">ば</h2>
          <Navigator />
        </div>
        <Body />
      </div>
    );
  }
}

export default App;
