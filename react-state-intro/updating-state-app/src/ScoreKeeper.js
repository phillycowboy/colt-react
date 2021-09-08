import React, {Component} from 'react';

class ScoreKeeper extends Component{
    constructor(props){
        super(props)
        this.state = {score: 0}
    }
// NOT THE WAY YOU SHOULD UPDATE STATE HAVE THE CURRENT STATE AS A CALLBACK FUNCTION AND THEN USE THAT AS AN ARGUMENT TO UPDATE STATE IN SETSTATE
    // singleKill = () => {
    //     this.setState({score: this.state.score + 1})
    // }
    // tripleKill = () => {
    //     this.setState({score: this.state.score + 3})
    // }

    // tripleKill = () => {
    //     this.setState((st) => {
    //         return {score: st.score + 1}
    //     })
    //     this.setState((st) => {
    //         return {score: st.score + 1}
    //     })
    //     this.setState((st) => {
    //         return {score: st.score + 1}
    //     })
    // }
    incrementSingleKill = (curState) => {
        return {score: curState.score + 1}
    }
    // callback
    singleKill = () => {
        this.setState(this.incrementSingleKill)
    }
    // updating state the safe way 
    incrementScore = (curState) => {
        return {score: curState.score + 3}
    }
    tripleKill = () => {
        this.setState(this.incrementScore)
    }

    render(){
        return(
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill!</button>
                <button onClick={this.tripleKill}>Triple Kill!</button>
            </div>
        )
    }
}

export default ScoreKeeper;