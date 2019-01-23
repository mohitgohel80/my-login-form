import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './LoginPage';
import './App.css';

export default class App extends Component {
 
  

// componentDidMount(){
//    axios.get(`https://jsonplaceholder.typicode.com/users/`) 
//    .then(response => {
//         console.log(response.data);
//         this.setState({event:this.state.data});
//       })

//       .catch(error => {
//         console.log(error);
//       });
//   };
  

  render() {
    return (
      <div className="text-center">
          <LoginPage />
       </div>
    )
    
  }
}


