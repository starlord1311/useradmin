import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login.js';
import CompanyAdd from './components/addcompany.js';
import {Route, Navlink, HashRouter} from 'react-router-dom';
import Menu from './components/sidemenu.js';
import CompanyList from './components/companylist.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/" component = {Login}/>
      <Route exact path="/Home" component = {CompanyAdd}/>
      </div>
    );
  }
}

export default App;
