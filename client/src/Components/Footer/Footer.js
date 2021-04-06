import React from 'react';
import footr from '../../Assets/footr.png'
import './footer.css'

const Footer = () => {
    return (
        <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
  <footer>
<div className="footer1">
  
<div className="footer2">
     <h2>Get in Touch</h2>

     <span className="touch">
     <i class="far fa-envelope"></i>
     contact@puppy-match.com
     </span>
     <br/>
     <span className="touch">
     <i class="fas fa-phone-alt"></i>
       +216 20 20 94 93
     </span>
     <br/>
     <div className="social">
     <i class="fab fa-facebook-f"></i>
     <i class="fab fa-instagram"></i>
     <i class="fab fa-twitter"></i>
     </div>
     
   </div>

  <div>
  <img src={footr} alt="footer" style={{width:'500px'}}/>
  </div>
</div>

<p className="copyright">Copyright © 2021. All rights reserved.</p>
  </footer>
</div>

    )
}

export default Footer
