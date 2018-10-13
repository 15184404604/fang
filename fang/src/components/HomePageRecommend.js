import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import '../assets/styles/homePageRecommend.less'
export default class HomePageRecommend extends Component {
  render() {
      return (
        <div className="home-page-recommend">
              <Flex>
                  <Flex.Item>

                      {this.props.result.map((item,i)=>{
                          return (
                              <div className="home-page-recommend-main" key={i}>
                                  <i className={item.iconClass} style={item.style}></i>
                                  <p style={item.style}>{item.title}</p>
                              </div>
                          )

                          
                      })}
                      <p className="line"></p>
                      
                  </Flex.Item>
                  
              </Flex>
          </div>
    )    
  }
}
