import React, { Component } from 'react'
import '../assets/styles/login.less'

import Logo from '../assets/images/logo1.png'
import axios from 'axios'
import LoginFormInput from '../components/LoginFormInput'
import LoginFormButton from '../components/LoginFormButton'
export default class Login extends Component {
  constructor(props){
    super(props);

    this.state={
      username:'',
      password:''
    }
  }

  handleClick(e,stateName){
    this.setState({
      [stateName]:e.target.value
    })

  }

  doLogin(){
    // console.log("用户名：",this.state.username,"密码：",this.state.password);
    const {username,password}=this.state;
    let _this=this;
    axios
    .get(`/sever/success.json?username=${username}&password=${password}`)
    .then((res)=>{
      
      if(res.data.success){
        alert(res.data.message);
        _this.props.router.push('/main');
      }
    })
    .catch((err)=>{
      console.log(err);
      
    })

  }
  render() {
    return (
        
      <div className="login">
            <img alt="" src={Logo} className="login-img"/>
            <form className="login-form">
                <LoginFormInput type="text" iconName="shouji" value={this.state.username} onChange={(e)=>this.handleClick(e,'username')}/>
                <LoginFormInput type="password" iconName="suo" value={this.state.password} onChange={(e)=>this.handleClick(e,'password')}/>
                <LoginFormButton value="登&nbsp;陆" block onClick={()=>this.doLogin()}/>
                <LoginFormButton value="忘记密码?" text/>
                <LoginFormButton value="免费注册"/>&nbsp;&nbsp;
                <LoginFormButton value="游客登陆"/>
            </form>
      </div>
    )
  }
}
