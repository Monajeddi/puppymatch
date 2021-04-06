import React from 'react';
import {Link} from 'react-router-dom';
import logopuppy from '../../Assets/logopuppy.png';
import './navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
            <img src={logopuppy} alt="logo" width={80} />
            <a className="navbar-brand" href="#" data-abc="true">Puppy-Match</a> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"> 
            <span className="navbar-toggler-icon" /> </button>
  <div className="collapse navbar-collapse" id="navbarColor02">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active"> <a className="nav-link" href="#" data-abc="true">Home <span className="sr-only">(current)</span></a> </li>
      <li className="nav-item"> <a className="nav-link" href="#" data-abc="true">Annonces</a> </li>
      <li className="nav-item"> <a className="nav-link" href="#" data-abc="true">Actualités</a> </li>
      <li className="nav-item"> <a className="nav-link" href="#" data-abc="true">Contact</a> </li>
    </ul>
    <form className="form-inline my-2 my-lg-0"> 
    <Link to="/signin">
    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Sign In</button> 
    </Link>

    <Link to="/signup">
    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Sign Up</button> 
    </Link>
    </form>
  </div>
</nav>
        </div>
    )
}

export default Navbar
