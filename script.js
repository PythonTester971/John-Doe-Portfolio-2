
// SLIDER
//solution trouvée à https://lesdocs.fr/slider-javascript/

// création d'un array de fichier image à chager pour l'attribut src
const slideImages = ["drapeau-coucher-soleil.jpg", "palmiers.jpg", "rocher-vagues.jpg", "vue-aerienne-rivage"];

let numero = 0;

function ChangeSlide(sense) {

  // sense : de combien d'image on se déplace, et passage à l'élément suivant de l'array
  numero += sense;


  //si des fois numero venait à être négatif, il faut lui réattribuer l'index maximal qui peut être sélectionné
  if (numero < 0) {
    numero = slideImages.length - 1;
  }
  //si le numero dépasse l'index max de l'array, il faut revenir à l'index 0
  if (numero > slideImages.length - 1) {
    numero = 0
  }

  //on attribue à l'élément #slide qui héberge les images du slider en attribut src l'élément de l'array qui 
  //est dans l'intervalle (boucle);
  document.querySelector("#slide").src = slideImages[numero];
}


// la fonction setInterval('fonction', durée_interval) permet de répéter l'action de la fonction (param 1)
// avec répétition en fonction d'un intervalle (parmam 2) donné en millisecondes
setInterval('ChangeSlide(1)', 4000);



// THEME

const themeButton = document.querySelector('#theme');

themeButton.addEventListener('click', () => {

  const bodyTheme = document.querySelector('body');
  const headerTheme = document.querySelector('header');
  const h1Theme = document.querySelector('h1');
  const footerTheme = document.querySelector('footer');
  const galleryTheme = document.querySelectorAll('.gallery-item');

  themeButton.classList.toggle("bg-white");
  themeButton.classList.toggle("txt-black");
  themeButton.classList.toggle("btn-border-light");

  bodyTheme.classList.toggle('bg-white');
  bodyTheme.classList.toggle('txt-black');

  headerTheme.classList.toggle('bg-lightgray');

  h1Theme.classList.toggle('txt-black');

  footerTheme.classList.toggle('bg-lightgray');
  footerTheme.classList.toggle('txt-black');

  for (item of galleryTheme) {

    item.classList.toggle("bg-custom-gray");
    item.classList.toggle("txt-black");

  }

  if (themeButton.textContent == "Light Theme") {
    themeButton.textContent = "Dark Theme";
  } else {
    themeButton.textContent = "Light Theme";
  }



})


// BURGER MENU : https://codepen.io/joesayegh/pen/jOEVPKO
var burgerMenu = document.getElementById('burger-menu');

var overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

// PARAGRAPHE DEPLIANT

//J'ai essayé de refaire ce que tu avais montré.
//Je ne suis pas sûre d'avoir 100% réussi, mais en tout cas ce que j'ai fait fonctionne :)
//Je suis un peu fière de moi

// const nature = document.querySelector("#nature");
// const events = document.querySelector("#events");
// const portraits = document.querySelector("#portraits");
// const retouching = document.querySelector("#retouching");

const services = document.querySelectorAll('.services');

services.forEach(function () {
  services[0].addEventListener('click', function (text) {

    if (paragraphe) {

      document.querySelector("#paragraphe").remove();

    } else {

      let paragraphe = document.createElement("p");
      nature.appendChild(paragraphe);
      paragraphe.textContent = text;
      paragraphe.id = "#paragraphe";

    }
  })

})



