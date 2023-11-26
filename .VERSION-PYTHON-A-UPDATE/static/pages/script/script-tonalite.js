document.addEventListener('DOMContentLoaded', function () {
   var lienTestFinal = document.querySelector('.finalexam');

   lienTestFinal.addEventListener('click', function (event) {
       event.preventDefault();
       var confirmation = confirm("Êtes-vous sûr de vouloir passer au test final ? Assurez-vous d'avoir complété toutes les leçons.");
       
       if (confirmation) {
           window.location.href = lienTestFinal.href;
       }
   });
});

var questionsEtReponses = {
   fondamentale: { reponse: "Mi", selecteur: "#answer1" },
   intervalle: { reponse: "Si", selecteur: "#answer2" }
};

function verifierReponses() {
   var erreurs = 0;

   for (var question in questionsEtReponses) {
       var element = document.querySelector(questionsEtReponses[question].selecteur);
       var reponseUtilisateur = element.value.toLowerCase();
       var bonneReponse = questionsEtReponses[question].reponse.toLowerCase();

       if (reponseUtilisateur !== bonneReponse) {
           element.style.border = "2px solid red";
           erreurs++;
       } else {
           element.style.border = "2px solid green";
       }
   }

   afficherResultat(erreurs);
}

function afficherResultat(erreurs) {
   var resultat = document.getElementById("resultat") || creerElementResultat();
   resultat.innerHTML = erreurs === 0 ? "Toutes les réponses sont correctes!" : "Il y a " + erreurs + " erreur(s).";
   resultat.style.color = erreurs === 0 ? "green" : "red";
}

function creerElementResultat() {
   var resultat = document.createElement("div");
   resultat.id = "resultat";
   document.body.appendChild(resultat);
   return resultat;
}
