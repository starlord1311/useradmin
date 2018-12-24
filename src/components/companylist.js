import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Radio, Table } from "react-bootstrap";
import logo from '../images/site-logo.png';
import {Route, NavLink, HashRouter, Link} from 'react-router-dom';
import {SideMenu, Item} from 'react-sidemenu';
import Menu from './sidemenu.js';
import ReactTable from 'react-table';
import './companylist.css';

export default class CompanyList extends Component {
render() {
  return(
    <div>
    <Menu />
    <input type ="text" placeholder="search" className="table2" />
    <Button className="export">
    Export CSV
    </Button>
    <Button className="addcompany">
    Add Company
    </Button>
    <div className="table1">
    <Table striped bordered condensed hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Company Name</th>
      <th>Role</th>
      <th>Total Equipment</th>
      <th>Location</th>
      <th>Wallet Detail</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01</td>
      <td>Company & Co.</td>
      <td>Contractor</td>
      <td>10 Operational</td>
      <td>Location, City</td>
      <td>Wallet Amount</td>
      <td>View Edit Block</td>
    </tr>
    <tr>
      <td>01</td>
      <td>Company & Co.</td>
      <td>Contractor</td>
      <td>10 Operational</td>
      <td>Location, City</td>
      <td>Wallet Amount</td>
      <td>View Edit Block</td>
    </tr>
    <tr>
      <td>01</td>
      <td>Company & Co.</td>
      <td>Contractor</td>
      <td>10 Operational</td>
      <td>Location, City</td>
      <td>Wallet Amount</td>
      <td>View Edit Block</td>
    </tr>
    <tr>
      <td>01</td>
      <td>Company & Co.</td>
      <td>Contractor</td>
      <td>10 Operational</td>
      <td>Location, City</td>
      <td>Wallet Amount</td>
      <td>View Edit Block</td>
    </tr>
    <tr>
      <td>01</td>
      <td>Company & Co.</td>
      <td>Contractor</td>
      <td>10 Operational</td>
      <td>Location, City</td>
      <td>Wallet Amount</td>
      <td>View Edit Block</td>
    </tr>

    <tr>
      <td>01</td>
      <td>Company & Co.</td>
      <td>Contractor</td>
      <td>10 Operational</td>
      <td>Location, City</td>
      <td>Wallet Amount</td>
      <td>View Edit Block</td>
    </tr>

    <tr>
      <td>01</td>
      <td>Company & Co.</td>
      <td>Contractor</td>
      <td>10 Operational</td>
      <td>Location, City</td>
      <td>Wallet Amount</td>
      <td>View Edit Block</td>
    </tr>

    <tr>
      <td>01</td>
      <td>Company & Co.</td>
      <td>Contractor</td>
      <td>10 Operational</td>
      <td>Location, City</td>
      <td>Wallet Amount</td>
      <td>View Edit Block</td>
    </tr>

    <tr>
      <td>01</td>
      <td>Company & Co.</td>
      <td>Contractor</td>
      <td>10 Operational</td>
      <td>Location, City</td>
      <td>Wallet Amount</td>
      <td>View Edit Block</td>
    </tr>

    <tr>
      <td>01</td>
      <td>Company & Co.</td>
      <td>Contractor</td>
      <td>10 Operational</td>
      <td>Location, City</td>
      <td>Wallet Amount</td>
      <td>View Edit Block</td>
    </tr>

    <tr>
      <td>01</td>
      <td>Company & Co.</td>
      <td>Contractor</td>
      <td>10 Operational</td>
      <td>Location, City</td>
      <td>Wallet Amount</td>
      <td>View Edit Block</td>
    </tr>

    <tr>
      <td>01</td>
      <td>Company & Co.</td>
      <td>Contractor</td>
      <td>10 Operational</td>
      <td>Location, City</td>
      <td>Wallet Amount</td>
      <td>View Edit Block</td>
    </tr>

    <tr>
      <td>01</td>
      <td>Company & Co.</td>
      <td>Contractor</td>
      <td>10 Operational</td>
      <td>Location, City</td>
      <td>Wallet Amount</td>
      <td>View Edit Block</td>
    </tr>

    <tr>
      <td>01</td>
      <td>Company & Co.</td>
      <td>Contractor</td>
      <td>10 Operational</td>
      <td>Location, City</td>
      <td>Wallet Amount</td>
      <td>View Edit Block</td>
    </tr>

    <tr>
      <td>01</td>
      <td>Company & Co.</td>
      <td>Contractor</td>
      <td>10 Operational</td>
      <td>Location, City</td>
      <td>Wallet Amount</td>
      <td>View Edit Block</td>
    </tr>
  </tbody>
</Table>
</div>
</div>
)
}
}
