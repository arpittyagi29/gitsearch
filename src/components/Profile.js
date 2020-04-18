import React from 'react'


class Profile extends React.Component {
  render () {
   { const {avtar1, name1, bio1, followers1, following1, link1, repo1, location1,show1} = this.props
     return(
       <div>
       {<div>
                      <div className='row'>
                       <img src={avtar1} alt={avtar1}/>
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
                         <a href={link1} target="_blank">See full Profile</a>
                       </div>
                     </div>
       }
       </div>
     )
  }
}
}

export default Profile;