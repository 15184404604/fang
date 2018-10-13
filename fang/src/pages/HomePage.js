import React, { Component } from 'react'

import Nav from '../components/HomePageNav'
import { Carousel } from 'antd-mobile'
import '../assets/styles/homePage.less'
import HomePageFeature from '../components/HomePageFeature'
import HomePageRecommend from '../components/HomePageRecommend'
import HomePageList from '../components/HomePageList'


import bannerUrl1 from '../assets/images/banner1.jpg'
import bannerUrl2 from '../assets/images/banner2.jpg'
import imgUrl1 from '../assets/images/home_img3_01.png'
import imgUrl2 from '../assets/images/home_img3_03.png'
import imgUrl3 from '../assets/images/home_img3_06.png'
import imgUrl4 from '../assets/images/home_img3_07.png'
import imgUrl5 from '../assets/images/home_img3_13.png'
import imgUrl6 from '../assets/images/home_img3_15.png'
import imgUrl7 from '../assets/images/home_img3_16.png'
import imgUrl8 from '../assets/images/home_img3_17.png'



export default class HomePage extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 180,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: [bannerUrl1, bannerUrl2],
          });
        }, 100);
      }
    render() {
        let data=[
            {
                img:imgUrl1,
                title:'新房'
            },
            {
                img:imgUrl2,
                title:'二手房'
            },
            {
                img:imgUrl3,
                title:'租房'
            },
            {
                img:imgUrl4,
                title:'商铺写字楼'
            },
            {
                img:imgUrl5,
                title:'卖房'
            },
            {
                img:imgUrl6,
                title:'海外地产'
            },
            {
                img:imgUrl7,
                title:'小区房价'
            },
            {
                img:imgUrl8,
                title:'问答'
            },
        ]
        
        let result=[
            {
                iconClass:'iconfont icon-youhuiquan',
                title:'独家优惠',
                style:{color:"#FF0000"}
            },
            {
                iconClass:'iconfont icon-gongjiaoche',
                title:'免费看房',
                style:{color:"#A9A9A9"}                
            },
            {
                iconClass:'iconfont icon-qiandai',
                title:'信用贷',
                style:{color:"#FFD807"} 
            },
            {
                iconClass:'iconfont icon-wenjiandocuments18',
                title:'房产咨询',
                style:{color:"#00BFFF"} 
            }
            
        ]
        
        return (
            <div className="home-page">
            
            {/*导航栏*/}
            <Nav/>
            {/*轮播*/}
            
            <Carousel
                    autoplay
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                {this.state.data.map(val => (
                    <a
                    key={val}
                    href="http://www.alipay.com"
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                    <img
                        src={`${val}`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    </a>
                    ))}
                </Carousel>

            {/* 8大特色 */}
            <HomePageFeature data={data}/>
            
            {/* 4大推荐 */}
            <HomePageRecommend result={result}/>

            {/* 猜你喜欢 */}
            <HomePageList/>

            {/* 底部导航 */}
            {/* <NavBottom btmData={btmData}/> */}
            </div>
        );
    }
}
