// Fait Par Sacha Pastor
// Permet d'attendre que le contenu HTML est complètement chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionne l'élément avec la classe 'finalexam' dans le HTML
    var lienTestFinal = document.querySelector('.finalexam');
 
    // Permet de savoir quand on clique sur l'élément sélectionner pour éxécuter le code
    lienTestFinal.addEventListener('click', function (event) {
       // Empêche l'action de base du hyperlink (Navigation vers la page demandé)
       event.preventDefault();
       // Affiche une pop-up de confirmation
       var confirmation = confirm("Êtes-vous sûr de vouloir passer au test final ? Assurez-vous d'avoir complété toutes les leçons.");
 
       // Vérifie si l'utilisateur a cliqué sur "OK" dans la boîte de dialogue
       if (confirmation) {
          // Si l'utilisateur confirme il est redirigé vers le lien stocké dans le href de l'élément avec la classe finalexam (hyperlink dans notre cas)
          window.location.href = lienTestFinal.href;
       }
    });
 });
 
 // Stocke toutes les réponses et les zones où doivent être entré celles-ci
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
 
 // Fonction pour vérifier les réponses de l'utilisateur par rapport au réponses attendues
 function verifierReponses() {
    var erreurs = 0; // Initialisation du compteur d'erreurs
 
    // Boucle sur chaque question dans l'objet "questionsEtReponses"
    for (var question in questionsEtReponses) {
       // Sélectionne l'élément HTML correspondant à la question
       var element = document.querySelector(questionsEtReponses[question].selecteur);
       // Récupère la réponse de l'utilisateur et la convertit en minuscules pour la comparaison (Pour accepter la réponse même avec des Majuscules/Minuscules différentes de la réponse attendue)
       var reponseUtilisateur = element.value.toLowerCase();
       // Convertit également la réponse attendue en minuscules pour la comparaison
       var bonneReponse = questionsEtReponses[question].reponse.toLowerCase();
 
       // Compare la réponse de l'utilisateur à la réponse attendue
       if (reponseUtilisateur !== bonneReponse) {
          // Change la couleur de la bordure de l'élément en rouge si la réponse est différente
          element.style.border = "2px solid red";
          // Augmente le compteur d'erreur
          erreurs++;
       } else {
          // Change la couleur de la bordure de l'élément en vert si la réponse est identique
          element.style.border = "2px solid green";
       }
    }
 
    // Appelle la fonction afficherResultat pour montrer le résultat
    afficherResultat(erreurs);
 }
 
 // Fonction "afficherResultat" pour afficher le résultat du quiz en texte sur le html
 function afficherResultat(erreurs) {
    // Obtient l'élément où afficher le résultat
    var resultat = document.getElementById("resultat")
    // Définit le texte en fonction du résultat
    resultat.innerHTML = erreurs === 0 ? "Toutes les réponses sont correctes!" : "Il y a " + erreurs + " erreur(s).";
    // Change la couleur du texte en vert pour aucune erreur sinon en rouge
    resultat.style.color = erreurs === 0 ? "green" : "red";
 }