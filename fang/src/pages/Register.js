import React, { Component } from 'react'

import RegisterNav from '../components/RegisterNav'
import RegisterInput from '../components/RegisterInput'
import RegisterUserAgreement from '../components/RegisterUserAgreement'
import RegisterLogin from '../components/RegisterLogin'

export default class Register extends Component {
  render() {
    return (
        <div>
            <RegisterNav/>
            <RegisterInput text="手机号：" type="text" placeholder="请输入手机号"/>
            <RegisterInput text="验证码：" type="password" placeholder="请输入验证码" is/>
            <RegisterUserAgreement/>
            <RegisterLogin/>
            
        </div>
    )
  }
}
