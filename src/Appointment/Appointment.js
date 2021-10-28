import React from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import moment from 'moment';
import { Button,Card,ButtonGroup,Img, DropdownButton, MenuItem } from 'react-bootstrap';
import axios from 'axios';
import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';
class Appointment extends React.Component {

  state = {
   
    persons: [],
    userName:'',
    userPhone:null,
    scheduleDate:'',
    category:'',
    address:'',
    status:'PENDING',
    lat:null,
    lng:null
  }

  componentDidMount() {
    axios.get(`http://theworkartech.uw.r.appspot.com/api/v1/theworkar/admin/appointments`)
      .then(res => {
        const persons = res.data.results;
        console.log(persons)
        this.setState({ persons });
      })
  }
  //Create appointment Code hare
  handleChange = event => {
    let data = event.target.name;
    let val = event.target.value;
    console.log( this.setState({ 
      [data]: val
    }))
  }

  handleSubmit = event => {
    event.preventDefault();

    const createAppointment = {
      userName:this.state.userName ,
      userPhone:parseFloat(this.state.userPhone) ,
      scheduleDate:this.state.scheduleDate ,
      category:this.state.category ,
      address:this.state.address ,
      status:'PENDING' ,
      lat:parseFloat(this.state.lat) ,
      lng:parseFloat(this.state.lng )
    };
    console.log("hi",createAppointment)

    axios.post(`http://theworkartech.uw.r.appspot.com/api/v1/theworkar/admin/appointments`,createAppointment)
      .then(res => {
       // alert("ok");
        //console.log(res);

        console.log(res.data);
        axios.get(`http://theworkartech.uw.r.appspot.com/api/v1/theworkar/admin/appointments`)
          .then(res => {
            const persons = res.data.results;
            console.log(persons)
            this.setState({ persons });
          })
      })
 }

  render() {

    return <div className="container">
      <h3 className="text-center mb-4"> Create Appointments</h3>
        <form onSubmit={this.handleSubmit} className="custom-card">
        <div className="row">
            <div class="col-md-6 mb-3">
              <label for="userName" class="form-label">User Name</label>
              <input type="text" class="form-control"  name="userName" onChange={this.handleChange} />
              {this.state.userName}
            </div>
            <div class="col-md-6 mb-3">
              <label for="userPhone" class="form-label" >User Phone</label>
              <input type="text" class="form-control"  name="userPhone" onChange={this.handleChange} />
              {this.state.userPhone}
            </div>
            <div class="col-md-6 mb-3">
              <label for="scheduleDate" class="form-label">Schedule Date</label>
              <input type="text" class="form-control"  name="scheduleDate" onChange={this.handleChange} />
            </div>
            <div class="col-md-6 mb-3">
              <label for="category" class="form-label">Category</label>
              <input type="text" class="form-control"  name="category" onChange={this.handleChange} />
            </div>
            <div class="col-md-6 mb-3">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control"  name="address" onChange={this.handleChange} />
            </div>
            <div class="col-md-6 mb-3">
              <label for="lat" class="form-label">Lat</label>
              <input type="text" class="form-control"  name="lat" onChange={this.handleChange}/>
            </div>
            <div class="col-md-6 mb-3">
              <label for="lng" class="form-label"  >Long</label>
              <input type="text" class="form-control" name="lng" onChange={this.handleChange} />
            </div>
            <div className="col-md-12 text-center">
            <button type="submit" class="btn btn-md btn-primary">Submit</button>
            </div>
            </div>
          </form>
    
      <h3 className="text-center mt-5 mb-4">Appointments List</h3>
      <div className="card p-3">
     <table className="table table-bordered">
      <tr> 
          <th>User Name</th>
          <th>User Phone No</th>
          <th>Category</th>
          <th>Address</th>
          <th>Date</th>

      </tr>
     
      { this.state.persons.map(person => 
       <tr>
      
      <td>{person.userName}</td>
      <td>{person.userPhone}</td>
      <td >{person.category}</td>
      <td>{person.address}</td>
      <td>{ moment(person.updatedAt).format("YYYY-MM-DD HH:mm") }</td>
      </tr>
      )}
     
  </table>
  </div>
  </div>
  }
}
export default Appointment;