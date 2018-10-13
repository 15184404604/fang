import React, { Component } from 'react'
import '../assets/styles/loginFormButton.less'
export default class LoginFormButton extends Component {
  render() {
    let {value,block,text,onClick}=this.props;
    let btnClass="login-form-btn";
    if(block){
      btnClass+=" block"
    }
    return (
      text===true?
      <p className="form-text">{value}</p>:
      <button type="button" className={btnClass} onClick={onClick}>{value}</button>
    )
  }
}
