import React from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import moment from 'moment';
import { Button,Card,ButtonGroup,Img, DropdownButton, MenuItem } from 'react-bootstrap';
import axios from 'axios';
class Product extends React.Component {
   
  state = {
   catgory: [],
   data:[],
   name:'',
   category:'',
   categoryId:'',
   address:'',
   price:'',
   city:'',
   image:''
   
 }
   componentDidMount() {
      axios.get(`http://theworkartech.uw.r.appspot.com/api/v1/theworkar/admin/appointments`)
        .then(res => {
          const catgory = res.data.results;
          console.log("catgory",catgory)
          this.setState({ catgory });
        })
    }
    productChange = event => {
      let data = event.target.name;
      let val = event.target.value;
      console.log( this.setState({ 
        [data]: val
      }))
    }

    addProductSubmit = event => {
      event.preventDefault();
  
      const addProduct = {
        userName:this.state.userName ,
        userPhone:parseFloat(this.state.userPhone) ,
        scheduleDate:this.state.scheduleDate ,
        category:this.state.category ,
        address:this.state.address ,
        status:'PENDING' ,
        lat:parseFloat(this.state.lat) ,
        lng:parseFloat(this.state.lng )
      };
      console.log("hi",addProduct)
  
      axios.post(`http://theworkartech.uw.r.appspot.com/api/v1/theworkar/service/register`,addProduct)
        .then(res => {
         // alert("ok");
          //console.log(res);
  
          console.log(res.data);
        
        })
   }
  

    render() {
       return (
         <section class="content">
         <div class="row">
            <div class="col-xs-12">
               <div class="mt-5 mb-5">
                  <h1 className="text-center">Add Product </h1>
               </div>
               <div class="row mb-4">
                  <div class="col-md-1 mb-3"></div>
                  <div class="col-md-10 mb-3">
                     <div class="card text-left">
                        <div class="card-body">
                           <form onSubmit={this.addProductSubmit}>
                              <div class="row">
                                 <div class="form-group col-md-8 mb-3">
                                    <label for="password">Product Name</label>
                                    <input name="name" class="form-control form-control-rounded" type="text" onChange={this.productChange}  required=""/>
                                 </div>
                                 <div class="form-group col-md-4 mb-3">
                                    <label for="password">Product Image</label>
                                    <input name="image" onChange={this.productChange}  class="form-control form-control-rounded" accept="image/*" id="password" type="file" required="" />
                                 </div>
                                 <div class="form-group col-md-4 mb-3">
                                    <label for="password">Select Category</label>
                                    <select name="p_category" onChange={this.productChange}  class="form-control form-control-rounded" id="cat" required="">
                                       {
                                        this.state.catgory.map(function(item,key){
                                         return <option  key={key} value={item.id}>{item.category}</option>
                                        })  
                                       }
                                    </select>
                                 </div>
                                 {/* <div class="form-group col-md-4 mb-3">
                                    <label for="email">Category Id</label>
                                    <select name="p_subcategory" class="form-control form-control-rounded" id="subcat" required="">
                                       <option value=""></option>
                                    </select>
                                 </div> */}
                                 <div class="form-group col-md-4 mb-3">
                                    <label for="password">Price</label>
                                    <input name="price" onChange={this.productChange}  class="form-control form-control-rounded" type="text" />
                                 </div>
                                 <div class="form-group col-md-4 mb-3">
                                    <label for="password">City</label>
                                    <input name="city" class="form-control form-control-rounded" type="text" />
                                 </div>
                                 <div class="form-group col-md-4 mb-3">
                                    <label for="password">Address</label>
                                    <input name="address" onChange={this.productChange}  class="form-control form-control-rounded" type="text" required="" />
                                 </div>
                                 {/* <div class="form-group col-md-4 mb-3">
                                    <label for="password">Product Selling Price (INR)</label>
                                    <input name="p_discounted" class="form-control form-control-rounded" type="number" required=""/>
                                 </div> */}
                                 {/* <div class="form-group col-md-4 mb-3">
                                    <label for="password">Product Quantity</label>
                                    <input name="p_qty" class="form-control form-control-rounded" type="number" required="" />
                                 </div> */}
                                 {/* <div class="form-group col-md-4 mb-3">
                                    <label for="password">Select Unit</label>
                                    <select name="p_unit" class="form-control form-control-rounded" required="">
                                       <option value=""></option>
                                       <option value="ltr">ltr</option>
                                       <option value="ml">ml</option>
                                       <option value="kg">kg</option>
                                       <option value="gm">gm</option>
                                       <option value="capsules">capsules</option>
                                       <option value="tablets">tablets</option>
                                       <option value="pcs">pcs</option>
                                       <option value="pack">pack</option>
                                       <option value="Ft">Ft</option>
                                       <option value="sqft">sqft</option>
                                       <option value="mtr">mtr</option>
                                       <option value="sqmtr">sqmtr</option>
                                       <option value="meter">meter</option>
                                       <option value="cm">cm</option>
                                    </select>
                                 </div>
                                 <div class="form-group col-md-4 mb-3">
                                    <label for="password">Product Stock</label>
                                    <input name="p_stock" class="form-control form-control-rounded" type="number" required=""/>
                                 </div>
                                 <div class="form-group col-md-6 mb-3">
                                    <label for="password">Product Highlight</label>
                                    <textarea class="form-control form-control-rounded"  ></textarea>
                                 </div> */}
                                 <div className="col-md-12 text-center"> <button type="submit" class="btn btn-rounded btn-primary mt-2">ADD</button></div>

                                
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
       )
    }
 }
 export default Product;