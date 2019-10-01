import React from 'react';



class UserCards extends React.Component {
    
render() {
    return(
     <div>
         <h1>UserCard</h1>
            <h1>{this.props.userinfo.name}</h1>
            <h1>{this.props.userinfo.location}</h1>
            <h1>{this.props.userinfo.login}</h1>
            <h2>{this.props.userinfo.followers}</h2>
        <img src={this.props.userinfo.avatar_url}/>

     </div>



    )
}
}

export default UserCards;