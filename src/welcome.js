import React, { Component } from 'react';


export default class welcome extends Component{
rander(){
   
        // This is a dumb "stateless" component
        return (
          <div>
            Welcome <strong>{ this.state.value}</strong>!
            <a href="javascript:;">Sign out</a>
          </div>
        )
      }
    }
