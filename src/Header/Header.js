import React from 'react';
import ReactDOM from 'react-dom';
import { Button,Card,ButtonGroup,Img, DropdownButton, MenuItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Product from '../Product/Product';
import Appointment from '../Appointment/Appointment'
class Header extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <div className="container">

<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#"><img src="https://www.theworkar.com/logo//lo.png" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link to="/product">Add Product</Link>
      </li>
      <li class="nav-item">
      <Link to="/">Create Appointment</Link>
      </li> 
    </ul>
  </div>
</nav>
<Switch>
    <Route exact path='/' component={Appointment}></Route>
    <Route exact path='/product' component={Product}></Route>
 
  </Switch>
    </div>
  }
}
export default Header;