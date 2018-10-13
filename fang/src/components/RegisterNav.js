import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import '../assets/styles/registerNav.less'
export default class RegisterNav extends Component {
  render() {
    return (
        <div>
        <NavBar
          mode="light"
          icon={<Icon type="left"/>}        
        >手机注册</NavBar>
      </div>
    )
  }
}
