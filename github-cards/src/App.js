import React from 'react';
import './App.css';
import axios from 'axios'
import UserCards from './UserCards.js'


class App extends React.Component {
 constructor () {
super();

this.state={

  usercard: []
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
}

 


render () {

  return (
    <div className="App">
<h1>Github User Cards</h1>
<UserCards userinfo={this.state.usercard}/>

    </div>
  );
}
}

export default App;
