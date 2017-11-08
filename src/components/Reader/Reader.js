import React, { Component } from 'react';
import {connect} from 'react-redux';
import { displayOff } from '../../actions/actions.js';
import './reader.css';


class Reader extends Component{

  constructor(){
    super();
    this.state = {
      display:false
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      display:nextProps.display
    })
  }

  clearOutput = (evt) => {
    console.log('clearOutput');
    this.props.displayOff();
  }

  //mapping own prop to state not doing it
  render(){
    console.log('reader props @ render:', this.props)
    console.log('reader state @ render:', this.state)
    return(
      <div>
        <h3>Output goes here:</h3>
        <div onClick={(evt)=>this.clearOutput(evt)}>
          {this.state.display && this.props.text}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state,ownProps){
  return{
    text:state.text,
    display:state.display
  }

}

export default connect(mapStateToProps, { displayOff })(Reader);
