// Attente du chargement complet du document HTML *Fait par Sacha Pastor* 
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


function verifierReponses() {
   // Tableau des réponses correctes *Fait par Sacha Pastor* 
   var reponsesCorrectes = ["voix", "paroles", "perfection", "troubadours", "gestes", "jeux", "messe", "motet", "chansons", "profanes", "divertissement", "raffiné", "danses", "opéra", "sonate", "orchestre", "styles", "galant", "sensible", "émotion"];

   var erreurs = 0;

   for (var i = 1; i <= reponsesCorrectes.length; i++) {
      // Récupère la réponse de l'utilisateur à partir de l'élément avec l'ID "mot" + i
      var reponseUtilisateur = document.getElementById("mot" + i).value.toLowerCase();

      if (reponseUtilisateur !== reponsesCorrectes[i - 1]) {
         // Si la réponse de l'utilisateur est incorrecte
         document.getElementById("mot" + i).style.border = "2px solid red";
         // Change la bordure de l'élément pour indiquer une réponse incorrecte
         document.getElementById("mot" + i).placeholder = reponsesCorrectes[i - 1];
         // Affiche la réponse correcte en tant que placeholder
         erreurs++;
      } else {
         // Si la réponse de l'utilisateur est correcte
         document.getElementById("mot" + i).style.border = "2px solid green";
         // Change la bordure de l'élément pour indiquer une réponse correcte
      }
   }

   // Affichage du résultat *Fait par Sacha Pastor* 
   var resultat = document.getElementById("resultat");
   if (erreurs === 0) {
      resultat.innerHTML = "Toutes les réponses sont correctes!";
      resultat.style.color = "green";
   } else {
      resultat.innerHTML = "Il y a " + erreurs + " erreur(s).";
      resultat.style.color = "red";
   }
}