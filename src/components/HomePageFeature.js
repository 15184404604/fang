import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import '../assets/styles/homePageFeature.less'



export default class HomePageFeature extends Component {
     
  render() {
 
       return (
        
        <div className="flex-container">
            <Flex>
                <Flex.Item>

                    {this.props.data.map((item,i)=>{
                        return (
                            <div className="flex-container-main" key={i}>
                                <img src={item.img} className="flex-container-main-img"/>
                                <p>{item.title}</p>
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
