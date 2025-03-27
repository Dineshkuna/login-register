// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card p-4">
            <h2 className="text-center mb-4">Register</h2>
            
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  placeholder="Enter Name"
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder="Enter Email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  placeholder="Enter Password"
                />
              </div>
              
              <button type="submit" className="btn btn-primary w-100 mb-3">Register</button>
              
              <div className="text-center">
                <p className="mb-0">Already Have an Account</p>
                <button type="submit" className="btn btn-light w-100 mb-3"><a href="#login" className="text-decoration-none">Login</a></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;