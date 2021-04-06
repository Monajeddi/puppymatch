import React from 'react';
import image from '../../Assets/image.png';
import googleplay from '../../Assets/googleplay.png';
import AppStore from '../../Assets/AppStore.png';
import image2 from '../../Assets/image2.png';
import search from '../../Assets/search.png';
import './Home.css';


const Home = () => {
    return (
        <div className="home" >
        
    <div className="cont hero">
        <div className="paragraph1">
            <h1>Puppy Match</h1>
          <h4>L'application qui connecte vos annimaux 
              <br/>
              de compagnie partout où vous êtes !
<br/>Téléchargez-la gratuitement.<br /></h4>
<div className="download">
    <img src={googleplay} alt="googleplay" style={{ width:'200px', marginRight:'15px'}}/>
    <img src={AppStore} alt="AppStore" style={{ width:'200px'}}/>
</div> 
        </div>
   <div>
   <img src={image} style={{ width:'650px', }}/>
   </div>
  


  </div>
  <div className="paragraph2">
     <h3>Notre Application </h3>
  <h5>
   Puppy Match est un réseau social pour chiens.
   <br/>
Nous connectons les chiens à travers une communauté aimante et amusante
<br/> et nous vous aidons à trouver le Match parfait pour vos chiens.
<br/>
Notre mission est que nos utilisateurs partagent leur amour et leurs soins <br/>pour leurs chiens et de les connecter dans tous le pays.
   </h5> 
   <br/>
  </div>

<div className="cont hero">
<div>
   <img src={image2} style={{ width:'450px', }}/>
   </div>
   <div className="paragraph3">
   <img src={search} style={{ width:'100px', }}/>
            <h3>Trouvez des chiens près 
                <br/>de chez vous</h3>
          <h4>Créez un profil pour votre adorable chien.
              <br/> Utilisez des filtres pour trouver des chiens près
               de <br/>chez vous
               par localisation ou par race.<br /></h4>
 
        </div>

</div>


        </div>
    )
}

export default Home
