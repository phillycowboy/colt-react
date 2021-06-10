import React, {Component} from 'react';


class Hello extends Component{
    render(){
        let bangs = "!".repeat(this.props.bangs)
        console.log(this.props)
        return(
            <div>
                <p>Hello {this.props.to} from {this.props.from}{bangs}</p>
                <img src={this.props.img} alt='hello img'/>
            </div>
        )
    }
}
export default Hello 