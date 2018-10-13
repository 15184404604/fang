import React, { Component } from 'react'
import axios from 'axios'
export default class about extends Component {
    constructor(props){
        super(props);

        console.log('about初始化！！');
        
    }
  render() {
      console.log(this);
      
    return (
      <div>
        <h1>
            关于我们{this.props.routeParams.userid}

        </h1>
      </div>
    )
  }

  componentDidMount = () => {
    axios.get(`/server/success?userid=${this.props.routeParams.userid}`)
  }
  
}

