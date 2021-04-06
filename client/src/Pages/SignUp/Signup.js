import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import chiens from '../../Assets/chiens.jpeg'


import {signUp, videErrors} from '../../JS/actions/user'

import './signup.css'

const Signup = ({ history }) => {
  const [user, setuser] = useState({});
  const errors = useSelector((state) => state.userReducer.errors);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, []);

    return (
        <div>
            <>
  
  <div className="container">
    <div className="row py-5 mt-4 align-items-center">
      {/* For Demo Purpose */}
      <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
        <h1>Créer un compte</h1>
        <p className="font-italic text-muted mb-0">Consultez nos annonces d'animaux, votre animal aura peut être sa chance ici.</p>
        <img src={chiens} alt="chiens" className="img-fluid mb-3 d-none d-md-block" />
        <p className="font-italic text-muted">Snippet By <a href="https://bootstrapious.com" className="text-muted">
            <u>Bootstrapious</u></a>
        </p>
      </div>
      {/* Registeration Form */}
      <div className="col-md-7 col-lg-6 ml-auto">
        <form action="#">
          <div className="row">
            {/* First Name */}
            <div className="input-group col-lg-6 mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white px-4 border-md border-right-0">
                  <i className="fa fa-user text-muted" />
                </span>
              </div>
              <input id="firstName" type="text" name="name" onChange={handleChange} placeholder="First Name" className="form-control bg-white border-left-0 border-md" />
            </div>
            {/* Last Name */}
            <div className="input-group col-lg-6 mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white px-4 border-md border-right-0">
                  <i className="fa fa-user text-muted" />
                </span>
              </div>
              <input id="lastName" type="text" name="lastname" onChange={handleChange} placeholder="Last Name" className="form-control bg-white border-left-0 border-md" />
            </div>
            {/* Email Address */}
            <div className="input-group col-lg-12 mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white px-4 border-md border-right-0">
                  <i className="fa fa-envelope text-muted" />
                </span>
              </div>
              <input id="email" type="email" name="email" onChange={handleChange} placeholder="Email Address" className="form-control bg-white border-left-0 border-md" />
            </div>
            {/* Phone Number */}
            <div className="input-group col-lg-12 mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white px-4 border-md border-right-0">
                  <i className="fa fa-phone-square text-muted" />
                </span>
              </div>
              <select id="countryCode" name="countryCode" style={{maxWidth: 80}} className="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
                <option value>+216</option>
                <option value>+33</option>
              </select>
              <input id="phoneNumber" type="tel" name="phone" onChange={handleChange} placeholder="Phone Number" className="form-control bg-white border-md border-left-0 pl-3" />
            </div>
            {/* Password */}
            <div className="input-group col-lg-12 mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white px-4 border-md border-right-0">
                <i className="fa fa-lock text-muted" />
                </span>
              </div>
              <input id="password" type="password" name="password" onChange={handleChange} placeholder="Password" className="form-control bg-white border-left-0 border-md" />
            </div>
            
            {/* Submit Button */}
            <div className="form-group col-lg-12 mx-auto mb-0">
              <a href="#" className="btn btn-primary btn-block py-2">
                <span className="font-weight-bold"
                onClick={() => dispatch(signUp(user, history))}>
                  Create your account</span>
              </a>
            </div>
            {/* Divider Text */}
            <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
              <div className="border-bottom w-100 ml-5" />
              <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
              <div className="border-bottom w-100 mr-5" />
            </div>
            {/* Social Login */}
            <div className="form-group col-lg-12 mx-auto">
              <a href="#" className="btn btn-primary btn-block py-2 btn-facebook">
                <i className="fa fa-facebook-f mr-2" />
                <span className="font-weight-bold">Continue with Facebook</span>
              </a>
              <a href="#" className="btn btn-primary btn-block py-2 btn-twitter">
                <i className="fa fa-twitter mr-2" />
                <span className="font-weight-bold">Continue with Twitter</span>
              </a>
            </div>
            {/* Already Registered */}
            <div className="text-center w-100">
              <Link to="/signin">
              <p className="text-muted font-weight-bold">Already Registered? 
              <a href="#" className="text-primary ml-2">Login</a></p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</>
<br/>
        </div>
    )
}

export default Signup
