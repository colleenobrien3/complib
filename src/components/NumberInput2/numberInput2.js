import React, { Component } from 'react';
import './numberInput2.css';

// This is a functional component - just sent up a little differently as an arrow function!

class NumberInput2 extends Component {
    constructor(props){
           super(props);
          this.state = {
              numb: parseInt(props.start)
         }
                
     }

     minus = (event) => {
        if(this.state.numb>parseInt(this.props.min)) {
        this.setState({numb: this.state.numb -= parseInt(this.props.step)})
        }
    };

    plus = (event) => {
        if(this.state.numb<parseInt(this.props.max)) {
        this.setState({numb: this.state.numb += parseInt(this.props.step)})
    }
}




    //  getInput = (event) => {
    //     this.setState({value: event.target.value})
    // };
    
    render(){

    return (
        <div className='thisDiv'>
            <span className='box blue' onClick={this.minus}>  -  </span>
            <span className='box'>
             {this.state.numb} 
            </span>
            <span className='box blue' onClick={this.plus}>  +  </span>
         </div>
    )
}
}

export default NumberInput2