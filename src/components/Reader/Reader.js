import React, { Component } from 'react';
import {connect} from 'react-redux';
import './reader.css';


class Reader extends Component{


  render(){
    return(
      <div>
        <h3>Output goes here:</h3>
      </div>
    )
  }
}

export default connect()(Reader);
