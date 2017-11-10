import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Panel } from 'react-bootstrap';
import './uploader.css';

import Dropzone from 'react-dropzone';

import { readJLQM, displayOn, selectFile } from '../../actions/actions.js';

class Uploader extends Component{

  constructor(){
    super();
    this.state = {
      files: [],
      rejected:[],
      rawText:""
    }
  }

  onDrop = (files) => {
    console.log('accepted/rejected files :',files);
    let accept = [];
    let reject = [];
    files.forEach((file)=>{
      if (file.name.endsWith('.jlqm')){
        accept.push(file);
      }else{
        reject.push(file);
      }
    });
    this.setState({
      files:[...this.state.files, ...accept],
      rejected:[...this.state.rejected, ...reject]
    })


  }

  selectFile(evt){
    //this file reading operation shouldn't be done here
    console.log(evt.target.value);
    const reader = new FileReader();
    this.setJLQM.bind(reader);
    reader.addEventListener("loadend", (evt) =>
    {
      this.setJLQM(evt.target.result)
      //evt.target.result has the jlqm text
      //reader does not work with binding of dispatch action
      //use a promise instead of this ya dummy
    })
    reader.readAsText(this.state.files[evt.target.value]);
    //make sure other component(s) know that a file is available
    this.props.selectFile(true,this.state.files[evt.target.value].name)
  }

  setJLQM(data){
    // console.log('data is...', data);
    this.setState({rawText:data});
    //dispatch action from here?
    this.props.readJLQM(data)
    //test display state
    this.props.displayOn();
  }

  render(){
    //is readJLQM working?
    console.log('readJLQM', this.props.readJLQM);
    return(
      <div>
        <h3>Dropzone here:</h3>
        <div id="Dropzone">
          <Dropzone onDrop={this.onDrop} >
            <p>Feed me your JLQMs, ;3</p>
          </Dropzone>
        </div>
        <div>
            <Panel>
              <p>Accepted files:</p>
              <ul className="list-group">
              {
                this.state.files.map(f => <li className="list-group-item"
                  key={f.name}
                  onClick={(evt)=>{this.selectFile(evt)}}>{f.name} - {f.size}
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

// function mapStateToProps(state,ownProps){
//   return{
//     jlqmRaw:state.text
//   }
// }

export default connect(null,{readJLQM,displayOn,selectFile})(Uploader)
