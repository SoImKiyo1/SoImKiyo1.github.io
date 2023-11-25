// Attente du chargement complet du document HTML
document.addEventListener('DOMContentLoaded', function () {

    // Sélectionne l'élément avec la classe 'finalexam' dans le document
    var lienTestFinal = document.querySelector('.finalexam');
 
    // Ajoute un écouteur d'événement au clic sur le lien 'Test Final'
    lienTestFinal.addEventListener('click', function (event) {
 
       // Empêche le comportement par défaut du lien (ici, la navigation vers une autre page)
       event.preventDefault();
 
       // Affiche une boîte de dialogue de confirmation avec un message personnalisé
       var confirmation = confirm("Êtes-vous sûr de vouloir passer au test final ? Assurez-vous d'avoir complété toutes les leçons.");
 
       // Si l'utilisateur confirme
       if (confirmation) {
          // Redirige l'utilisateur vers l'URL du lien 'Test Final'
          window.location.href = lienTestFinal.href;
       }
    });
 });
 
 // Stocker les questions et les réponses correctes dans un objet
 var questionsEtReponses = {
   fondamentale: {
      reponse: "Mi",
      selecteur: "#answer1"
   },
   intervalle: {
      reponse: "Si",
      selecteur: "#answer2"
   }
};

function verifierReponses() {
   var erreurs = 0;

   // Vérifier chaque question
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

   // Affichage du résultat
   var resultat = document.getElementById("resultat");
   if (!resultat) {
      resultat = document.createElement("div");
      resultat.id = "resultat";
      document.body.appendChild(resultat); // ou l'ajouter à un endroit spécifique de la page
   }
   if (erreurs === 0) {
      resultat.innerHTML = "Toutes les réponses sont correctes!";
      resultat.style.color = "green";
   } else {
      resultat.innerHTML = "Il y a " + erreurs + " erreur(s).";
      resultat.style.color = "red";
   }
}