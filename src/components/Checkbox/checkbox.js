import React, { Component } from 'react';
import './checkbox.css';

// This is a functional component - just sent up a little differently as an arrow function!

class Checkbox extends Component {
    constructor(props){
           super(props);
          this.state = {
              checked: ""
         }
                
     }




     checkIt = (event) => {
         if(this.state.checked === true) {
        this.setState({checked: false})
         }else {
             this.setState({checked: true})
         }
         document.querySelector('#box').classList.toggle('checked')
         
    };
    
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
        <div id="containThis">
          <div id="box" className={this.props.class} onClick={this.checkIt}>
          </div>
         <span>{this.props.message}</span>
        </div>
    )
}
}

export default Checkbox; 