import React, { Component } from 'react';
import {connect} from 'react-redux';
import { displayOff,formatJLQM,selectFile } from '../../actions/actions.js';
import { Button,Panel } from 'react-bootstrap';
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
    //make sure a we have text to format
    this.props.formatJLQM(this.props.rawText);

  }

  clearOutput = (evt) => {
    console.log('clearOutput');
    this.props.selectFile(false);
    this.props.displayOff();
  }


  //mapping own prop to state not doing it
  render(){
    const clickButton = <Button bsStyle="success"
      onClick={(evt)=>this.formatText(evt)}>
      Extract Text from File
    </Button>;
    const clearButton = <Button bsStyle="danger"
      onClick={(evt)=>this.clearOutput(evt)}>
      Clear Me
    </Button>;
    console.log('reader props @ render:', this.props)
    console.log('reader state @ render:', this.state)
    return(
      <div>
        {this.props.selectedFile && clickButton}
        <Panel>
          {this.props.formattedText || "Waiting..."}
        </Panel>
        {this.props.selectedFile && clearButton}
      </div>
    )
  }
}

function mapStateToProps(state,ownProps){
  return{
    rawText: state.text.rawText,
    formattedText: state.text.extractedText,
    display:state.display,
    selectedFile:state.text.fileStatus
  }

}

export default connect(mapStateToProps, { displayOff, formatJLQM, selectFile })(Reader);
