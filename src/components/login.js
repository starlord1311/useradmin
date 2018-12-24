import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
import logo from '../images/site-logo.png';
import {Route, NavLink, HashRouter, Link} from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="mainbox">
      <div>
      <img src={logo} class="img-responsive logo" />
      <vr />
      <div className="Login">
      <div className="company">
      <h3>Login with Equipshare</h3>
      </div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large" className="login1">
            <ControlLabel className="login2"></ControlLabel>
            <FormControl
              autoFocus
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large" className="login3">
            <ControlLabel></ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
            />
          </FormGroup>
          <div>
                    <Link to ="/Home" className="home">
          <Button
          className="loginbutton"
            block
            bsSize="large"
            type="submit"
          >
            Login

          </Button>
          </Link>
          <div className="forgot">
          <p>Forgot Password</p>
          </div>
          </div>
        </form>
      </div>
      </div>
      </div>
    );
  }
}
