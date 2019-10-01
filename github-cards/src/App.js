import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends React.Component {
 constructor () {
super();


 }


 componentDidMount () {
   axios
   .get('https://api.github.com/users/taylorhh5')
   .then(response => console.log (response))
 }

 


render () {

  return (
    <div className="App">
<h1>Github User Cards</h1>
    </div>
  );
}
}

export default App;
