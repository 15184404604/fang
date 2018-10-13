import React, { Component } from 'react'
import { NavBar,Icon } from 'antd-mobile';
import '../assets/styles/homePageNav.less'
export default class HomePageNav extends Component {
  render() {
    return (
      <div className="nav-box">
        <NavBar 
            leftContent={
                <div className="nav-left">
                    <span>成都</span>
                    <i className="iconfont icon-sanjiaoxing-down nav-left-icon"></i>
                </div>
            }
            rightContent={
                <div className="nav-right">               
                    <i className="iconfont icon-ditu8 nav-right-icon"></i>
                    <span>地图</span>
            </div>
            }
        >
        <a href="javascript:;" className="nav-grabble">
            <Icon key="0" type="search" size="md"  className="nav-grabble-icon"/>
            <input type="text" placeholder="挑好房,上源码搜房APP" className="nav-grabble-input"/>
        </a>
        
        </NavBar>
      </div>
    )
  }
}
