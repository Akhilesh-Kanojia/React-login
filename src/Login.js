import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './index.scss';
import validator from './logValidator';

export default class Login extends Component {
   constructor() {
      super();
      this.state = {
         email: '',
         password: ''
      };
   }

   validateForm() {
      const validateErrors = validator({ email: this.state.email,
         password: this.state.password });
     
      if (!validateErrors) {     
         this.props.history.push('/home');
      }     
      else {
         alert('You entered wrong credential');
      }
      localStorage.setItem('Email', email.value);
      localStorage.setItem('Password', password.value);
   }

    handleChange = event => {
       this.setState({
          [event.target.id]: event.target.value
         
       });
    
    }

    handleSubmit = event => {
       event.preventDefault();
    };

    render() {
       return (
          <div className="login d-flex align-items-center">
             <form onSubmit={this.handleSubmit} action="home.js">
                <FormGroup controlId="email" bsSize="large">
                   <ControlLabel>Email</ControlLabel>
                   <FormControl 
                      type="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                   />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                   <ControlLabel>Password</ControlLabel>
                   <FormControl 
                      type="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                   />
                </FormGroup>
                <Button
                   block
                   bsSize="large"
                   onClick={() => this.validateForm()}
                   type="submit"
                >
                    Login
                </Button>
             </form>
          </div>
       );
    }
}