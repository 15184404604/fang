import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory} from 'react-router'
import Login from './Login'
// import Register from './Register'

import Main from './Main'

export default class App extends Component {
  render() {
    return (
      <Login/>
      //<Register/>
      // <Main/>
    )
  }
}
const router=(
  <Router history={hashHistory}>

        <Route path="/"  component={Login} />
        <Route path="main"  component={Main} />


</Router>
)
ReactDOM.render(
    router,
    document.querySelector("#root")
)