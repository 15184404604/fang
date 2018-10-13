import React, { Component } from 'react'
import '../assets/styles/registerInput.less'
export default class RegisterInput extends Component {
  render() {
      
    return (
        this.props.is===true?
        <div className="register-main">
          <label className="register-main-left">{this.props.text}</label>
          <input type={this.props.type} placeholder={this.props.placeholder} className="register-main-right"/>
          <p className="register-main-auch">获取验证码</p>
        </div>:
        <div className="register-main">
            <label className="register-main-left">{this.props.text}</label>
            <input type={this.props.type} placeholder={this.props.placeholder} className="register-main-right"/>
        </div>
    )
  }
}
