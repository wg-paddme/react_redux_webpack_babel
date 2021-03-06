import React,{Component} from 'react';
import {render} from 'react-dom';
import Counter from './sources/Counter';
import MessageList from './sources/Message';
import MessageJump from './sources/Message2';


export default class App extends Component{
    render(){
        return (
            <div>
                <h1>State与Props</h1>
                <Counter />
                <h2>Props与context</h2>
                <MessageList />
                <h2>context跨级传递参数</h2>
                <MessageJump />
            </div>
        )
    }
}

const appDom = render( <App />, document.querySelector("#root"));
console.log(App)
console.log(<App/>)
console.log(appDom)
