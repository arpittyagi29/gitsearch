import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Card } from 'antd';


class Card1 extends Component {
    render() {
        const {avtar1, name1, bio1, followers1, following1, link1, repo1, location1,show1} = this.props
        return (
            <div>
                <Card extra={<a href={link1} >More</a>} style={{ width: 300 ,marginLeft:'465px',fontSize:'25px' }}>
    <div>
                      <div className='row'>
                       <img src={avtar1} alt={avtar1} style={{ width: 250 , height:250 }}/>
                       </div>
                       <div>
                         <p>{name1}</p>
                         <h6>{bio1}</h6>
                         <h5>{location1}</h5>
                         <div>
                           <div>
                             <h6>{followers1}Followers</h6>
                           </div>
                           <div>
                    <h6 className='repo'>{following1}Following</h6>
                           </div>
                           <div>
                             <h6>{repo1} Repository</h6>
                           </div>
                         </div>
                       </div>
                     </div>
    </Card>
            </div>
        )
    }
}

export default Card1
