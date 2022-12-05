let voiture = {
    "Nom" : "Eggo",
    "imgUrl" : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    "nombresRoues" : 4,
    "Couleur" : "Marron",
    "Contructeur" : "Citroen",
    "Carburant" : "Solaire",
    "nombrePortes" : 3,
    "Autonomie" : "450km",
    "vitesseMaxi" : "120km/h"
};

let cont = document.getElementById('container')
let img = document.createElement('img')

img.src = voiture.imgUrl;
cont.appendChild(img);

cont.innerHTML += "<br>"
cont.innerHTML += voiture.Contructeur + "<br>";
cont.innerHTML += voiture.Nom + "<br>";
cont.innerHTML += voiture.Couleur + "<br>";
cont.innerHTML += voiture.nombrePortes + " portes<br>";
cont.innerHTML += voiture.nombresRoues + " motrices<br>";
cont.innerHTML += voiture.Autonomie + " d\'autonomie<br>";
cont.innerHTML += " fonctionne au carburant " + voiture.Carburant + "<br>";
cont.innerHTML += " max : " + voiture.vitesseMaxi + "<br>";



