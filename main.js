let button = document.querySelectorAll(".navButton");
let content = document.getElementById("content");

const homeContent = () => {
  content.innerHTML = `
    <div class="banner">
    <h1>Mariana Rainha</h1>
    <h2>Web Developer</h2>
    <p id="bannerDescription">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla
      sint ab laboriosam nobis autem cupiditate placeat sed. Pariatur deserunt
      at quis possimus optio corporis reiciendis qui numquam tenetur
      harum!lorem7
    </p>
    <button id="bannerButton" onclick="contactContent()">
      Say hi!
    </button>
    <ul id="socialMediaList" class="horizontalBar">
      <li>
        <a href="">G</a>
      </li>
      <li>
        <a href="">F</a>
      </li>
      <li>
        <a href="">I</a>
      </li>
      <li>
        <a href="">T</a>
      </li>
    </ul>
  </div>`;
};

const aboutContent = () => {
  content.innerHTML = `
    <div class="banner">

    <h2>About Me</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla
      sint ab laboriosam nobis autem cupiditate placeat sed. Pariatur deserunt
      at quis possimus optio corporis reiciendis qui numquam tenetur
      harum!lorem7
    </p>
    
  </div>`;
};

const projectContent = () => {
  content.innerHTML = `
 <section id="projects">
  

<div class="project">
  <img src="./img/deliveroo.png" alt="Img deliveroo" />
  <div class="projectlist">
    <h3>Deliveroo Web</h3>
    <h4>Projet Front-End</h4>
    <ul>
      <li>Récupération de données</li>
      <li>Panier de commande</li>
    </ul>
  </div>
</div>
<div class="project">
  <img src="./img/vinted.png" alt="Img vinted" />
  <div class="projectlist">
    <h3>Vinted Web</h3>
    <h4>Projet Full-Stack</h4>
    <ul>
      <li>Inscription/connexion</li>
      <li>Récupération de données</li>
      <li>Publication d'annonces</li>
      <li>Barre de recherche</li>
      <li>Paiement</li>
      <li>Ypload de photos</li>
    </ul>
  </div>
</div>
<div class="project">
  <img src="./img/airbnb.png" alt="Img airbnb" />
  <div class="projectlist">
    <h3>Airbnb Mobile</h3>
    <h4>Projet Full-Stack</h4>
    <ul>
      <li>Inscription/connexion</li>
      <li>Modification du profil utilisateur</li>
      <li>Affichage de cartes</li>
      <li>Géolocalisation</li>
      <li>Accès à la galerie d'images</li>
      <li>Accès à l'appareil photo</li>
    </ul>
  </div>
</div>
</section>
  `;
};

const contactContent = () => {
  content.innerHTML = `
    <div class="banner">

    <h2>Contact Me</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla
      sint ab laboriosam nobis autem cupiditate placeat sed. Pariatur deserunt
      at quis possimus optio corporis reiciendis qui numquam tenetur
      harum!lorem7
    </p>
    
  </div>`;
};

button[0].addEventListener("click", homeContent, false);
button[1].addEventListener("click", aboutContent, false);
button[2].addEventListener("click", projectContent, false);
button[3].addEventListener("click", contactContent, false);
