import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button } from 'reactstrap';

export default class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={value: ''};
       
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit = event => {
        event.preventDefault();
        
        const user = {
          
            user:this.state.value,
           
        }
     

      axios.post(`https://jsonplaceholder.typicode.com/users/`,{user}) 
      .then(response => {
          console.log(response);
           console.log(response.data);
           alert('your name is'+  this.state.value);
          
         })
   
         .catch(error => {
           console.log(error);
         });
     };

    

render() {
return (
<div className="Login text-center">
<h2>Sign In Page</h2>
<form className="Container " onSubmit={this.handleSubmit}>

<label>UserName</label>:&nbsp;
<input type="text"  ref="username" value={this.state.value}  onChange={this.handleChange} />
<br/>
<label>Password</label>:&nbsp;&nbsp;&nbsp;&nbsp;
<input type="password"  ref="password" />
<br/><br/>
<Button type="submit"   value="Login" data-test="submit" color="warning">Submit</Button>
</form>
</div>
);
}
}

