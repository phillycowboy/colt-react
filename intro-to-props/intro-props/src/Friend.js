import React, { Component } from 'react';

export default class Friend extends Component{
    render(){
        console.log(this.props)
        const {name, hobbies} = this.props;
        return(
            <div>
                <h1>{name}:</h1>
                <ul>
                    {hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>
        )
    }
}
Friend.defaultProps = {
    name: "Ben"
}
