import React, { Component } from 'react';
import validator from 'validator';
import './App.css';


class DojoForm extends Component{
  state = {
    username_Val: '',
    email_Val: '',
  }


  render(){
    return(
      <div>
        <h1>{this.state.username_Val}</h1>
        <input type="text" onChange={
          (event) => this.setState({username_Val: event.target.value})
        }
        value = {this.state.username_Val}/>
        <h1>{this.state.email_Val}</h1>
        <input type="text" value = {this.state.email_Val} onChange={(event) =>
          this.setState({email_Val: event.target.value})
        } />
      <div class="button">
        <button type="button" name="button">Submit</button>
      </div>
      </div>
    )
  }
}


export default DojoForm;
