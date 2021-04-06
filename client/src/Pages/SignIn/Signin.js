import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {signIn, videErrors} from '../../JS/actions/user'
import '../SignUp/signup.css'
import chiens from '../../Assets/chiens.jpeg'

const Signin = ({ history }) => {
  const [user, setuser] = useState({});

  const dispatch = useDispatch();
  const errors = useSelector((state) => state.userReducer.errors);
  console.log(errors);
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
  <h1>Create an Account</h1>
  <p className="font-italic text-muted mb-0">Create a minimal registeration page using Bootstrap 4 HTML form elements.</p>
  <img src={chiens} alt="chiens" className="img-fluid mb-3 d-none d-md-block" />
  <p className="font-italic text-muted">Snippet By <a href="https://bootstrapious.com" className="text-muted">
      <u>Bootstrapious</u></a>
  </p>
</div>
{/* Registeration Form */}
<div className="col-md-7 col-lg-6 ml-auto">
  <form action="#">
    <div className="row">
     
      {/* Email Address */}
      <div className="input-group col-lg-12 mb-4">
        <div className="input-group-prepend">
          <span className="input-group-text bg-white px-4 border-md border-right-0">
            <i className="fa fa-envelope text-muted" />
          </span>
        </div>
        <input id="email" type="email" name="email" onChange={handleChange} placeholder="Email Address" className="form-control bg-white border-left-0 border-md" />
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
          onClick={() => dispatch(signIn(user, history))}
          >
            Sign In </span>
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
        <Link to="/signup">
        <p className="text-muted font-weight-bold">Don't have an account? 
        <a href="#" className="text-primary ml-2">Sign Up</a></p>
        </Link>
      </div>
    </div>
  </form>
</div>
</div>
</div>
</>
  </div>
    )
}

export default Signin
