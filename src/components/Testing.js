import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Profile from './Profile'
import { Typography } from 'antd';
import Card1 from './Card';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title } = Typography;
var Loader = require('react-loader');

class Testing extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username:'',
            avtar1 : '',
      username1 : '',
      name1 : '',
      bio1 : '',
      followers1 : '',
      following1 : '',
      link1 : '',
      repo1 : '',
      location1 : '',
      loaded : true,
        }
    }
    changeValue=(event)=>{
        this.setState({
     username:event.target.value,
        })
        console.log("changed")
    }

submitValue=(event)=>{
        console.log("ValueSubmit")
     axios.get(`https://api.github.com/users/${this.state.username}`)
     .then(response =>{
        console.log(response.data)
        var  metrices = response.data
        this.setState({
          avtar1 : metrices.avatar_url,
          username1 : metrices.login,
          name1 : metrices.name,
          bio1 : metrices.bio,
          followers1 : metrices.followers,
          following1 : metrices.following,
          created1 : metrices.created_at,
          link1 : metrices.html_url,
          location1 : metrices.location,
          repo1 : metrices.public_repos,
          loaded :false,
        })

    })
    .catch(error => {
                alert('Invalid Inputs')
                this.setState({
                    loaded:true
                })
            })
      }
      handle=()=>{
        console.log("Button Pressed")
      }
      onFinishFailed=()=>{
        console.log("Plz try again")
      }
   
    
    render() {
        const {username,avtar1,username1,name1,bio1,followers1,following1,created1,link1,repo1,location1,loaded} = this.state
        return (
            <div className="Heading">
                <Title >Enter Github Id</Title>
                <Form onFinish={this.submitValue}
                onFinishFailed={this.onFinishFailed}>
      <Form.Item style={{ width: 300 ,marginLeft:'475px',fontSize:'25px' }}
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
          <Input prefix={<UserOutlined className="site-form-item-icon"/>} value={username} placeholder="Username" onChange={this.changeValue}/>
      </Form.Item>
   <br/>
   <Button type="primary" htmlType="submit">Click Me</Button>
               <br/> <br/>
               <Card1 avtar1={avtar1} username1={username1} name1={name1} bio1={bio1} followers1={followers1} following1={following1} created1={created1} link1={link1} location1={location1} repo1={repo1} loaded={loaded}/>
        </Form>
        </div>
        )
    }
}

export default Testing
