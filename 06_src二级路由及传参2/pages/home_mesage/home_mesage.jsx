import React, { Component } from 'react'
import {Route,Link} from 'react-router-dom'
import MessageDetail from '../message_detail/message_detail'
export default class HomeMessage extends Component {
  state={
    messages:[
      {id:'001',name:'消息001'},
      {id:'002',name:'消息002'},
      {id:'003',name:'消息003'},
    ]
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.messages.map((msgObj)=>{
            return <li key={msgObj.id}>
              <Link to={`/home/message/detail/${msgObj.id}`} >
              {msgObj.name}</Link>
              </li>
            })
          }
        </ul>
        <hr/>
        <Route path="/home/message/detail/:id" component={MessageDetail}/>
      </div>
    )
  }
}
