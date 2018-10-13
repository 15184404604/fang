import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import Home from './home'
import About from './about'

export default class App extends Component {
    constructor(props){
        super(props)

        console.log('App初始化');
        
    }
  render() {
    return (
        <div>
           <h1>
                我是顶级组件
            </h1>
            <hr/> 
            <ul>
                <li style={{display:"inline-block"}}><a href='#/home'>首页</a></li>
                &emsp;
                <li style={{display:"inline-block"}}><a href='#/about/11'>关于</a></li>
            </ul>
            <hr/>
            {this.props.children}
        </div>
      
    )
  }
}

const router=(
    <Router history={hashHistory}>
        <Route path="/"  component={App}>
            <IndexRoute component={Home} />
            <Route path="home"  component={Home} />
            <Route path="about/:userid"  component={About} />
        </Route>

     
    </Router>
)
ReactDOM.render(
    router,
    // <App/>,
    document.querySelector('#root')
)