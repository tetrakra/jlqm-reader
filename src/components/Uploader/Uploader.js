import React, { Component } from 'react';
import './uploader.css';

import Dropzone from 'react-dropzone'

class Uploader extends Component{

  constructor(){
    super();
    this.state = {
      files: [],
      rejected:[]
    }
  }

  onDrop = (accepted,rejected) => {
    console.log('accepted/rejected files :',accepted,rejected);
    this.setState({files:accepted,rejected:rejected});
  }

  render(){
    return(
      <div>
        <h3>Dropzone here:</h3>
        <div id="Dropzone">
          <Dropzone onDrop={this.onDrop}>
            <p>Feed me your JLQMs, ;3</p>
          </Dropzone>
        </div>
        <div>
          <p>Accepted files:</p>
          <ul>
          {
            this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes
            <div>
              {(f.preview)}
            </div> </li>)
          }
        </ul>
          <p>Rejected files: </p>
          <ul>
          {
            this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
          }
        </ul>
        </div>
      </div>
    )
  }
}

export default Uploader
