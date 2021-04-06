import React from 'react';
import {Link} from 'react-router-dom';
import logopuppy from '../../Assets/logopuppy.png';
import logo1 from '../../Assets/logo1.png';
import './Nav.css'

const Nav = () => {
    return (
        <div className="header2 bg-success-gradiant" >
            <div class="">
            <nav className="navbar navbar-expand-lg h2-nav"> 
            <img src={logo1} alt="logo" style={{width:'40px', margin:'0px 20px'}} />
            <a className="navbar-brand" href="#" >Puppy-Match</a> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header2" aria-controls="header2" aria-expanded="false" aria-label="Toggle navigation"> <span className="icon-menu" /> </button>
  <div className="collapse navbar-collapse hover-dropdown" id="header2">
    <ul className="navbar-nav">
      <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
      <li className="nav-item active"><a className="nav-link" href="#">Annonces</a></li>
      <li className="nav-item"><a className="nav-link" href="#">Actualités</a></li>
      <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
    </ul>
    <ul className="navbar-nav ml-auto">
        <Link to="/signin">
      <li className="nav-item active"><a className="nav-link" href="#">Login</a></li>
        </Link>

      <Link to="/signup">
      <li className="nav-item"><a className="btn rounded-pill btn-dark py-2 px-4" href="#">Sign up</a></li>
      </Link>
    </ul>
  </div>
</nav>
</div>
        </div>
    )
}

export default Nav

