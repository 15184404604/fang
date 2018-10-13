import React, { Component } from 'react'
import PropTypes from 'prop-types'
import assign from 'object-assign'

import '../assets/styles/loginFormInput.less'


export default class LoginFormInput extends Component {

    static propTypes={
    type:PropTypes.string
    }
  render() {
    let iconClass=`left-icon iconfont icon-`+this.props.iconName
    let props=assign({},this.props)
    delete props.iconName
    return (
      <div className="login-form-input">
        <i className={iconClass}></i>
        <input className="right-input" {...props}></input>
      </div>
    )
  }
}


