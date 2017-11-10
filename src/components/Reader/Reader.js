import React, { Component } from 'react';
import {connect} from 'react-redux';
import { displayOff,formatJLQM } from '../../actions/actions.js';
import { Button } from 'react-bootstrap';
import './reader.css';


class Reader extends Component{

  componentWillMount(){
    this.setState({
      display:false,
      output:'nothing',
    })
  }

  componentWillUpdate(nextProps){
    // console.log('reader component updated with ', nextProps);
    if (nextProps.display !== this.props.display){
      this.setState({
        display: nextProps.display
      })
    }

  }

  formatText(evt){
    this.props.formatJLQM(this.props.rawText);

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
        <Button onClick={(evt)=>this.formatText(evt)}>Extract Text from File</Button>
        <div>
          {/* {this.state.display && this.format(this.props.text)} */}
          {this.state.display && (this.props.formattedText || "nothing")}
        </div>
        <Button onClick={(evt)=>this.clearOutput(evt)}>Clear me</Button>
      </div>
    )
  }
}

function mapStateToProps(state,ownProps){
  return{
    rawText: state.text,
    formattedText: state.text.extractedText,
    display:state.display
  }

}

export default connect(mapStateToProps, { displayOff, formatJLQM })(Reader);
