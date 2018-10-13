import React, { Component } from 'react'
import {render} from 'react-dom'
import Login from './Login'
import Register from './Register'
import HomePage from './HomePage'
import HomePageNav from './HomePageNav'
import NavBottom from '../components/NavBottom'

export default class App extends Component {
  render() {
    return (
      // <Login/>
      //<Register/>
      // <div>
      //   {/*导航栏*/}
      //   <HomePageNav/>
      //   <HomePage/>
      // </div>
      <NavBottom/>
      
    )
  }
}
render(
    <App/>,
    document.querySelector("#root")
)