import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Panel } from 'react-bootstrap';
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
            <Panel>
              <p>Accepted files:</p>
              <ul className="list-group">
              {
                this.state.files.map(f => <li className="list-group-item"
                  key={f.name}>{f.name} - {f.size}
                  bytes
                </li>)
              }
            </ul>
              <p>Rejected files: </p>
              <ul className="list-group">
              {
                this.state.rejected.map(f => <li className="list-group-item"
                  key={f.name}>{f.name} - {f.size}
                  bytes
                </li>)
              }
            </ul>
          </Panel>
        </div>
      </div>
    )
  }
}

export default connect()(Uploader)
