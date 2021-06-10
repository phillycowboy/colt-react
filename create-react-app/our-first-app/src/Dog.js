import React, {Component} from 'react';
import './Dog.css'

let img = "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/puppy-410265.jpg?h=0c7c9985&itok=ZQixcJRY"

class Dog extends Component{
    render(){
        return(
            <div className="Dog">
                <h1>DOG!</h1>
                <img src={img}/>
            </div>
        )
    }
}
export default Dog;