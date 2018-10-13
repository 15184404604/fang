import React, { Component } from 'react'

import { ListView} from 'antd-mobile';

import imgUrl from '../assets/images/listimg3.jpg'

import '../assets/styles/homePageList.less'

const data = [
    {
      img: imgUrl,
      title: '融创天府逸家商铺',
      area: '龙泉驿-龙泉驿',
      areasize:'1室2厅 98平米',
      mating:['商城','绕城外','公园','单价低','大型超市']
    },
    {
        img: imgUrl,
        title: '融创天府逸家商铺',
        area: '龙泉驿-龙泉驿',
        areasize:'1室2厅 98平米',
        mating:['商城','绕城外','公园','单价低','大型超市']
    },
    {
        img: imgUrl,
        title: '融创天府逸家商铺',
        area: '龙泉驿-龙泉驿',
        areasize:'1室2厅 98平米',
        mating:['商城','绕城外','公园','单价低','大型超市']
      },
      {
        img: imgUrl,
        title: '融创天府逸家商铺',
        area: '龙泉驿-龙泉驿',
        areasize:'1室2厅 98平米',
        mating:['商城','绕城外','公园','单价低','大型超市']
      },
      {
          img: imgUrl,
          title: '融创天府逸家商铺',
          area: '龙泉驿-龙泉驿',
          areasize:'1室2厅 98平米',
          mating:['商城','绕城外','公园','单价低','大型超市']
      },
      {
          img: imgUrl,
          title: '融创天府逸家商铺',
          area: '龙泉驿-龙泉驿',
          areasize:'1室2厅 98平米',
          mating:['商城','绕城外','公园','单价低','大型超市']
        }

    
  ];

  
export default class HomePageList extends Component {
    constructor(props){
        super(props);

        // 初始化ListView的数据源
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2, //行改变的匹配规则
        }); 

        this.state={
            dataSource
        }
    }
    renderRow(rowData,sectionID,rowID){

        // 准备楼盘标签的渲染色
        let matArr  = rowData.mating.map((mat,index)=>{
            switch (mat) {
                case '商城':
                    return <span key={index} className="green">{mat}</span>

                case '绕城外':
                    return <span key={index} className="orange">{mat}</span>

                case '公园':
                    return <span key={index} className="skyblue">{mat}</span>

                default:
                    return <span key={index} className="gray">{mat}</span>
            }
        })



        return (
            <div className="homePageList">
                <div className="homePageList-left-box">
                    <img alt="" src={rowData.img}/>
                </div>
                <div className="homePageList-right-box">
                    <p className="title">{rowData.title}</p>
                    <p className="area">{rowData.area}</p>
                    <p className="areasize">{rowData.areasize}</p>
                    <p>{matArr}</p>
                    <div className="price">售价待定</div>
                </div>
            </div>
        )
    }

    // 页头渲染
    renderHeader(){
        return (
            <div className="header">猜你喜欢</div>
        )
    }
    //分割线
    renderSeparator(sectionID,rowID){
        return (
            <div key={`${sectionID}-${rowID}`} style={{
                backgroundColor: '#ccc',
                height: 1,
                borderTop: '1px solid #ECECED',
                borderBottom: '1px solid #ECECED',
              }}/> 

            
        )
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}

                renderRow={this.renderRow}

                style={{height:'370px'}}
                renderHeader={this.renderHeader}
                renderSeparator={this.renderSeparator}
            />
        )
    }

    componentDidMount = () => {
      setTimeout(() => {
          this.setState({
              dataSource:this.state.dataSource.cloneWithRows(data)
          })
      }, 600);
    }
    
}