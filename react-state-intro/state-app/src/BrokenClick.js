import React, { Component } from 'react';

class BrokenClick extends Component{
    constructor(props){
        super(props)
        this.state = {
            clicked: false
        }
        // this.handleClick = this.handleClick.bind(this)
    }
     handleClick = (e) => {
        this.setState({clicked: true})
    }
    render(){
        return(
            <div>
                <h1>{this.state.clicked? "Clicked!":"Not Clicked"}</h1>
                <button onClick={this.handleClick}>Broken Click</button>
            </div>
        )
    }
}

export default BrokenClick;

// if you use a function declaration you are not binding 'this' there for your function call will be out of context 
// you either need to use an arrow function bc arrow functions have an automatic bidning of this.
// or 
// you need to bind it in the constructor this.handleClick = this.handleClick.bind(this)