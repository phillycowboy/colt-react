import React, { Component } from 'react';

class ClickerChallenge extends Component{
    constructor(props){
        super(props);
        this.state = {
            num: 1
        }

    }
    handleClick = () => {
        this.setState({
            num: Math.floor(Math.random() * 10) + 1
        })
    }

    render(){
        return(
            <div>
                <h1>Number is {this.state.num}</h1>
                {this.state.num === 7 ? 
                <h2>You WON!</h2>
                :
                <button onClick={this.handleClick}>Get Random Number</button>
                }
            </div>

        )
    }
}

export default ClickerChallenge;


