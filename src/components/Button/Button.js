import React from 'react';
import './Button.css';
import Icon from '../Icon/Icon.js';

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    let classList = '';
    let types = ['primary', 'danger', 'success', 'warning', 'default']
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    if (!(props.type)) {
        classList += ` button-default`
    }
    if (props.large) {
        classList += ` button-large`
    }
    if (props.cursor) {
        classList += ` button-cursor`
    }
    if (props.outline) {
        classList += ` button-outline`
    }
    if (props.textFill) {
        classList += ` button-${props.type}-textFill`
    }
    if (props.muted) {
        classList += ` button-${props.type}-muted`
    }
   
    // <button className={`button-${props.type}`}>
    if (props.icon) {
        return(
            <button className={classList}>
                <Icon src={props.src} />
                <span>{props.label}</span>
            </button>
            )
        } else return(
    <button className={classList}>
        {props.label}
    </button>
    )
}

export default Button; 