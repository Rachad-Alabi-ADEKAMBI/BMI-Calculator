let poidsaffiche1 = document.getElementById("poids1");
let poidsaffiche2 = document.getElementById("poids2");
let poidsaffiche3 = document.getElementById("poids3");
let poidsaffiche4 = document.getElementById("poids4");
let poidsaffiche5 = document.getElementById("poids5");
let poidsaffiche6 = document.getElementById("poids6");

let taille = document.getElementById("taille").value * 2;
let type =  document.getElementById("type").value;
let submit = document.getElementById("submit");

submit.addEventListener("click", function (){
if (gender.value = homme) {
    switch(type){
      case type = ectomorphe:
        poids1 = 20* taille;
        poids2 = 24 *taille;
        poids3 = 27.5* taille;
        poids4 = 30 *taille;
        poids5 = 40* taille;
        poids6 = 50 *taille;
        break;

      case type = mesomorphe:
        poids1 = 23* taille;
        poids2 = 25 *taille;
        poids3 = 27.5* taille;
        poids4 = 30 *taille;
        poids5 = 40* taille;
        poids6 = 50 *taille;
        break;

      case type = endomorphe:
          poids1 = 25* taille;
          poids2 = 27 * taille;
          poids3 = 28.5* taille;
          poids4 = 30 * taille;
          poids5 = 40* taille;
          poids6 = 50 *taille;
          break;
        
        default: alert("Veuillez vérifier les informations fournies svp");
    }
  }
  else{
    switch(type){
      case type = ectomorphe:
        poids1 = 20* taille;
        poids2 = 24 *taille;
        poids3 = 27.5* taille;
        poids4 = 30 *taille;
        poids5 = 40* taille;
        poids6 = 50 *taille;
        break;

      case type = mesomorphe:
        poids1 = 23* taille;
        poids2 = 25 *taille;
        poids3 = 27.5* taille;
        poids4 = 30 *taille;
        poids5 = 40* taille;
        poids6 = 50 *taille;
        break;

      case type = endomorphe:
          poids1 = 25* taille;
          poids2 = 27 * taille;
          poids3 = 28.5* taille;
          poids4 = 30 * taille;
          poids5 = 40* taille;
          poids6 = 50 *taille;
          break;
        
          default: alert("Veuillez vérifier les informations fournies svp")
    }
  }

poidsffiche1.innerHTML = poids1;
poidsaffiche2.innerHTML = poids2;
poidsaffiche3.innerHTML = poids3;
poidsaffiche4.innerHTML = poids4;
poidsaffiche5.innerHTML = poids5;
poidsaffiche6.innerHTML = poids6;

  })



