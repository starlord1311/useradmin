import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import logo from '../images/site-logo.png';
import {Route, NavLink, HashRouter, Link} from 'react-router-dom';
import Sidebar from "react-sidebar";
import './sidemenu.css';


export default class Menu extends Component {

  render() {
    return (
      <div class="sidenav">
        <img src={logo} class="img-responsive sidelogo" />
        <hr />
        <a href="#about">Dashboard</a>
        <hr />
        <a href="#services">Location</a>
        <hr />
        <a href="#clients">Companies</a>
        <hr />
        <a href="#contact">Equipment Master</a>
<hr />
        <a href="#clients">Equipment Categories</a>
<hr />
        <a href="#clients">Agent</a>
<hr />
        <a href="#clients">Wallet</a>
<hr />
        <a href="#clients">Rental Requests</a>
<hr />
        <a href="#clients">Reports</a>
<hr />
      </div>
    );
  }
}
