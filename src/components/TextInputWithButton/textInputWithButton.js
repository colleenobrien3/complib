import React, { Component } from 'react';
import './textInputWithButton.css';
import TextInput from '../TextInput/textInput.js';

// This is a functional component - just sent up a little differently as an arrow function!

class TextInputWithButton extends Component {
    // constructor(props){
    //        super(props);
        //   this.state = {
        //       value: ""
        //  }
                
    //  }




    //  getInput = (event) => {
    //     this.setState({value: event.target.value})
    // };
    
    render(){
        // let classList = '';
        // let types = ['default', 'placeholderProvided', 'mediumSize']
        // if (types.includes(this.props.type)) {
        //     classList += ` textInput-${this.props.type}`
        // }
        // if (this.props.medium) {
        //     classList += ` textInput-medium`
        // }
    return (
        <div id="thisContainer">
           <TextInput id='hi' class={this.props.class} placeHolder={this.props.placeHolder} />
            <span>
            <button onClick={this.props.onClick} className={this.props.buttClass}>{this.props.buttonLabel}</button>
            </span>
         </div>
    )
}
}

export default TextInputWithButton; 