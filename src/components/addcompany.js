import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Radio } from "react-bootstrap";
import logo from '../images/site-logo.png';
import {Route, NavLink, HashRouter, Link} from 'react-router-dom';
import './addcompany.css';
import {SideMenu, Item} from 'react-sidemenu';
import Menu from './sidemenu.js';

export default class CompanyAdd extends Component {
  render() {
    return (
      <div>
      <Menu />
      <Button className="add">
      Add
      </Button>
      <h3 className="title">Add Company</h3>
      <hr className="line" />
      <div className="basic">
      <div className="info">
      <h3>Basic Info</h3>
      </div>
      <label className="l1">Company Name:
      <input type="text" />
      </label>
      <label className="l2"><h3 className="l12">Company Type:</h3>
      <FormGroup>
        <Radio className="radio" class="radioGroup" inline>
          Private or Public Ltd.
        </Radio>
        <Radio className="radio" class="radioGroup" inline>
          Individual
        </Radio>
        </FormGroup>
      </label>
      <label className="l3">Person Name:
      <input type="text" />
      </label>
      <label className="l4">Company Landline No.:
      <input type="text" />
      </label>
      <label className="l5">Company Person No.:
      <input type="text" />
      </label>
      <label className="l6">Company Logo:
      <input type="text" />
      </label>
      <label className="l7">Company Address:
      <input type="text" />
      </label>
      <label className="l8">Company Location:
      <input type="text" />
      </label>
      <label className="l9">Contact Person Email Id:
      <input type="email" />
      </label>
      <label className="l10">Contact Person Alternate No.:
      <input type="text" />
      </label>
      <label className="l11">Company Role
      <input type="text" />
      </label>
      </div>

      <div className="basic2">
      <div className="info">
      <h3>Login Detail</h3>
      </div>
      <label className="l13">Registered Email:
      <input type="email" />
      </label>
      <label className="l14">Password:
      <input type="password" />
      </label>
      <label className="l15">Registered Number:
      <input type="text" />
      </label>
      <label className="l16">Confirm Password:
      <input type="password" />
      </label>
      </div>

      <div className="basic3">
      <div className="info">
      <h3>Commercial Details</h3>
      </div>
      <label className="l17">Asset Management Rates:
      <input type="text" />
      </label>
      <label className="l18"><h3 className="l12">Billing Cycle:</h3>
      <FormGroup>
        <Radio className="radio" class="radioGroup" inline>
          Weekly
        </Radio>
        <Radio className="radio" class="radioGroup" inline>
          Monthly
        </Radio>
        </FormGroup>
      </label>
      <label className="l19"><h3 className="l12">Equipshare Charges:</h3>
      <FormGroup>
        <Radio className="radio" class="radioGroup" inline>
          Normal
        </Radio>
        <Radio className="radio" class="radioGroup" inline>
          Anonymous Deal
        </Radio>
        </FormGroup>
      </label>
      <label className="l20">Contract Details:
      <input type="text" />
      </label>
      <label className="l21">Penalty Clauses:
      <input type="text" />
      </label>
      <label className="l22">Terms & Condition:
      <input type="text" />
      </label>
      <label className="l23">GST No.:
      <input type="text" />
      </label>
      <label className="l24">Free Subscription:
      <input type="text" />
      </label>
      <label className="l25">Billing Day:
      <input type="text" />
      </label>
      <label className="l26">Credit Limit:
      <input type="email" />
      </label>
      <label className="l27">TIN No.:
      <input type="text" />
      </label>
      </div>


      </div>

                )
              }
            }
