import React, { Component } from 'react';

class Button extends Component{
    render(){
        return(
            <button onClick={() => {alert("Hey asshole!")}}>CLICK ME!</button>
        )
    }
}

export default Button;