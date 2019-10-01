import React from 'react';

class FollowerCards extends React.Component {

    render() {

        return(
            <div>
                 <h1>Followers</h1>
                 <h1>{this.props.followerinfo.login}</h1>   
                <h2>{this.props.followerinfo.url}</h2>
            <img src={this.props.followerinfo.avatar_url}/>
            </div>


        )




    }
}

export default FollowerCards;