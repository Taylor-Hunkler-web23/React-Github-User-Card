import React from 'react';
import './App.css';
import axios from 'axios'
import UserCards from './UserCards.js'
import FollowerCards from './FollowerCards.js'

class App extends React.Component {
 constructor () {
super();

this.state={

  usercard: [],
  followerCards: []
}

 }


 componentDidMount () {
   axios
   .get('https://api.github.com/users/taylorhh5')
  //  .then(response => console.log (response))

   .then(response => {
     this.setState({
     usercard: response.data
  
     });
   })
   .catch (error => console.log(error))


 axios
 .get('https://api.github.com/users/taylorhh5/followers')
//  .then(response => console.log (response, "followers"))

 .then (response => {
   this.setState({
     followerCards: response.data
   })
 })

  }

render () {

  return (
    <div className="App">
<h1>Github User Cards</h1>
<UserCards userinfo={this.state.usercard}/>

{this.state.followerCards.map (follower => { 
return <FollowerCards followerinfo= {follower}/>

})}

    </div>
  );
}
}

export default App;
