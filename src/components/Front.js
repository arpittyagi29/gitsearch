import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Profile from './Profile'
import { Typography } from 'antd';
import Card1 from './Card';

const { Title } = Typography;
var Loader = require('react-loader');
class Front extends React.Component {
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
        
    }

   submitValue=event=>{
       event.preventDefault()
       this.setState({
           loaded:false,
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
       })
        console.log(this.state.username)
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
          loaded : true,
        })

    })
    .catch(error => {
                alert('Invalid Inputs')
                this.setState({
                    loaded:true
                })
            })
      }
    
    render() {
        const {username,avtar1,username1,name1,bio1,followers1,following1,created1,link1,repo1,location1,loaded} = this.state
        return (
            <div>
             <form onSubmit={this.submitValue}>
             <Title>Enter Github Id</Title>
                <input type="text" value={username} onChange={this.changeValue}></input>
               <br/> <br/>
               <button type='submit' onClick={this.handle}>Click Me!</button>
               <Loader loaded={loaded}></Loader>
               <br/> <br/>
               <Card1 avtar1={avtar1} username1={username1} name1={name1} bio1={bio1} followers1={followers1} following1={following1} created1={created1} link1={link1} location1={location1} repo1={repo1}/>
        </form>
        </div>
        )
    }
}

export default Front
