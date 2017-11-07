import React, { Component } from 'react';
import {connect} from 'react-redux';
import './reader.css';


class Reader extends Component{

  //mapping own prop to state not doing it
  render(){
    console.log('reader props @ render:', this.props)
    console.log('reader state @ render:', this.state)
    return(
      <div>
        <h3>Output goes here:</h3>
        <div>
          {this.props.text}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state,ownProps){
  return{
    text:state.text
  }

}

export default connect(mapStateToProps)(Reader);
