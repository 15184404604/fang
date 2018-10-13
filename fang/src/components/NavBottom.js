import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';

export default class NavBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: true,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
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
            {this.renderContent('Life')}
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
            {this.renderContent('Koubei')}
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
            {this.renderContent('Friend')}
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
            {this.renderContent('My')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

