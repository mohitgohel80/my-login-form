import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

export default class signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value: ''
        };
    }
    
    render(){
        return(
            <div className="Login text-center">
                <form className="Container " onSubmit={this.handleSubmit}>
                    <label>UserName:</label>:&nbsp;
                    <input type="text"  value={this.state.value}  onChange={this.handleChange}  />
                    <br/>

                    <label>E-mailId:</label>:&nbsp;
                    <input type="text"  value={this.state.value}  onChange={this.handleChange}  />
                    <br/>  

                    <label>ContectNo:</label>:&nbsp;
                    <input type="text"  value={this.state.value}  onChange={this.handleChange}  />
                    <br/>  

                    <label>Password:</label>:&nbsp;
                    <input type="text"  value={this.state.value}  onChange={this.handleChange}  />
                    <br/>  

                    <Button type="submit" value="Login" color="warning">Submit</Button>
                </form>   
            </div>
        )
    }

}