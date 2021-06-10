import React, { Component } from 'react'

export default class Machine extends Component{
    render(){
        const {s1,s2,s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3) 
        return(
            <div className="Machine" style={{border: "2px solid black", backgroundColor: "lightblue"}}>
                <p style={{fontSize: "40px"}}>{s1} {s2} {s3}</p>
                <p style={{fontSize: "40px"}}> {winner ? "You Win!" : "You Lose!"}</p>
            </div>
        )
    }
}
