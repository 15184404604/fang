import React, { Component } from 'react'

export default class home extends Component {
    constructor(props){
        super(props);

        console.log('home初始化！！');
        
    }
  render() {
    return (
      <div>
        <h1>我是首页</h1>
      </div>
    )
  }
}
