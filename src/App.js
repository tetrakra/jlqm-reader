import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Uploader from './components/Uploader/Uploader.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">JLQM Reader</h1>
        </header>
        <p className="App-intro">
          To get started, drop <code>a JLQM file</code> into the box and
          <i> watch the magic</i>.
        </p>

        <Uploader />

      </div>
    );
  }
}

export default App;
