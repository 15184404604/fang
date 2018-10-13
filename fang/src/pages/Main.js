import React, { Component } from 'react'

import Home from './HomePage'
import Wetalker from './Wetalker'
import Like from '../components/HomePageList'
import Personage from './Personage'



import { TabBar } from 'antd-mobile';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      fullScreen: true,
    };
  }


  render() {
    return (
      <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          //未选中的字体颜色
          unselectedTintColor="#949494"
          //选中的字体颜色
          tintColor="#000"
          //tabbar 背景色
          barTintColor="white"
          //是否隐藏
          hidden={this.state.hidden}
        >
          <TabBar.Item
            //标题文字
            title="首页"
            //唯一标识
            key="Home"
            //默认展示图片
            icon={<div className='iconfont icon-home' style={{
              fontSize:'22px', 
            }}
            />
            }
            //选中后的展示图片
            selectedIcon={<div className='iconfont icon-home' style={{
              fontSize:'22px', 
              color:'#000',
              fontWeight:'bold'
            }}
            />
            }
            //是否选中
            selected={this.state.selectedTab === 'home'}
        
            //bar 点击触发，需要自己改变组件 state & selecte={true}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
            data-seed="logId"
          >
            <Home/>
          </TabBar.Item>
          <TabBar.Item
            //默认展示图片
            icon={<div className='iconfont icon-chat' style={{
              fontSize:'22px', 
            }}
            />
            }
            //选中后的展示图片
            selectedIcon={<div className='iconfont icon-chat' style={{
              fontSize:'22px', 
              color:'#000',
              fontWeight:'bold'
            }}
            />
            }
            title="微聊"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <Wetalker/>            
          </TabBar.Item>
          <TabBar.Item
            //默认展示图片
            icon={<div className='iconfont icon-xing' style={{
              fontSize:'22px', 
            }}
            />
            }
            //选中后的展示图片
            selectedIcon={<div className='iconfont icon-xing' style={{
              fontSize:'22px', 
              color:'#000',
              fontWeight:'bold'
            }}
            />
            }
            title="推荐"
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <Like/>
          </TabBar.Item>
          <TabBar.Item
            //默认展示图片
            icon={<div className='iconfont icon-wode' style={{
              fontSize:'22px', 
            }}
            />
            }
            //选中后的展示图片
            selectedIcon={<div className='iconfont icon-wode' style={{
              fontSize:'22px', 
              color:'#000',
              fontWeight:'bold'
            }}
            />
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <Personage/>            
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

