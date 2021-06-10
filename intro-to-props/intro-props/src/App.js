import React, {Component} from 'react';
// import Hello from './Hello';
import Greeting from './Gretting'
import Machine from './Machine'
// import Friend from './Friend'

class App extends Component{
    render(){
        return(
            <div>
                {/* <Friend 
                    name="Elton"
                    hobbies={['piano', 'singing', 'dancing']}
                />
                <Friend 
                    name="Frida"
                    hobbies={['drawing', 'painting']}
                />
                <Friend 
    
                    hobbies={['coding', 'playing guitar', 'cooking']}
                /> */}
                <Greeting />
                <Machine s1="🍒" s2="🍒" s3="🍒"/>
                <Machine s1="🍒" s2="🍇" s3="🍊"/>

            </div>
        )
    }
}
export default App