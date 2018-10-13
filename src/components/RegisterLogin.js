import React, { Component } from 'react'
import '../assets/styles/registerlogin.less'
export default class RegisterLogin extends Component {
  render() {
    return (
      <div className="register-login">
          <button className="register-login-btn">登录</button>
          <p className="register-login-own">已有账号</p>
      </div>
    )
  }
}
