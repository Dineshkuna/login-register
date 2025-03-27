// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";
import Login from "./Login";
import { useState } from "react";
import axios from 'axios'

const Signup = () => {
  const[name , setName] =useState();
  const[email , setEmail] =useState();
  const[password , setPassword] =useState();


  const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/register', {name, email, password}).then(result => console.log(result)).catch(err => console.log(err))
 
  }

  return (
   
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card p-4">
            <h2 className="text-center mb-4">Register</h2>
            
            <form onSubmit={handleSubmit} >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <button type="submit" className="btn btn-primary w-100 mb-3">Register</button>
              
            </form>
              <div className="text-center">
                <p className="mb-0">Already Have an Account</p>
               <Link to ='/login' type="submit" className="btn btn-light w-100 mb-3"><Login/></Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;