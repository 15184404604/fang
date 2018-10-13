import React, { Component } from 'react'
import '../assets/styles/registerUserAgreement.less'
export default class RegisterUserAgreement extends Component {
  render() {
    return (
      <div className="register-user-agreement">
        <button className="register-user-agreement-btn">✔</button>
        <span className="spancolor1">我已同意</span>
        <span className="spancolor2">《用户服务协议》 及 《隐私权政策》</span>
      </div>
    )
  }
}
