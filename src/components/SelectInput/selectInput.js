import React from 'react';
import './selectInput.css';
import Pic from './arrowThing.png';

const SelectInput = (props) => {
    let classList=''
    let nextList=''
    if (props.outline) {
        classList += props.outline
    }
    if (props.size) {
        classList += ` ${props.size}`
    }
    if (props.background) {
        classList += ` ${props.background}`
        nextList += ` in-${props.background}`
    }
    return (
        <div className={classList}>
        <select className={nextList} name={props.label}>
            <option selected >{props.label}</option>
            <option>{props.opt1}</option>
            <option>{props.opt2}</option>
         </select>
         <img src={Pic} alt='Pic'/>
         </div>
    )
}

export default SelectInput