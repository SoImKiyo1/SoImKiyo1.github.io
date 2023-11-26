// Écoute l'événement 'DOMContentLoaded' pour exécuter du code une fois que le contenu HTML est complètement chargé.
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionne l'élément avec la classe 'finalexam'.
    var lienTestFinal = document.querySelector('.finalexam');
 
    // Ajoute un écouteur d'événement de clic sur l'élément sélectionné.
    lienTestFinal.addEventListener('click', function (event) {
        // Empêche le comportement par défaut du lien (empêcher la navigation vers l'URL du lien).
        event.preventDefault();
        // Affiche une boîte de dialogue de confirmation avec un message personnalisé.
        var confirmation = confirm("Êtes-vous sûr de vouloir passer au test final ? Assurez-vous d'avoir complété toutes les leçons.");
        
        // Vérifie si l'utilisateur a cliqué sur "OK" dans la boîte de dialogue.
        if (confirmation) {
            // Si l'utilisateur confirme, redirige vers l'URL spécifiée dans l'attribut href de 'lienTestFinal'.
            window.location.href = lienTestFinal.href;
        }
    });
 });
 
 // Déclaration d'un objet pour stocker les questions et leurs réponses correctes.
 var questionsEtReponses = {
    fondamentale: { reponse: "Mi", selecteur: "#answer1" }, // Question sur la note fondamentale
    intervalle: { reponse: "Si", selecteur: "#answer2" }    // Question sur l'intervalle
 };
 
 // Déclaration de la fonction verifierReponses pour évaluer les réponses données par l'utilisateur.
 function verifierReponses() {
    var erreurs = 0; // Initialisation du compteur d'erreurs.
 
    // Boucle sur chaque question dans l'objet 'questionsEtReponses'.
    for (var question in questionsEtReponses) {
        // Sélectionne l'élément HTML correspondant à la question.
        var element = document.querySelector(questionsEtReponses[question].selecteur);
        // Récupère la réponse de l'utilisateur et la convertit en minuscules pour la comparaison.
        var reponseUtilisateur = element.value.toLowerCase();
        // Convertit également la réponse correcte en minuscules pour la comparaison.
        var bonneReponse = questionsEtReponses[question].reponse.toLowerCase();
 
        // Compare la réponse de l'utilisateur à la réponse correcte.
        if (reponseUtilisateur !== bonneReponse) {
            // Si différent, change le style de la bordure de l'élément pour indiquer une erreur.
            element.style.border = "2px solid red";
            // Incrémente le compteur d'erreurs.
            erreurs++;
        } else {
            // Si identique, change le style de la bordure pour indiquer une réponse correcte.
            element.style.border = "2px solid green";
        }
    }
 
    // Appelle la fonction afficherResultat pour montrer le résultat.
    afficherResultat(erreurs);
 }
 
 // Déclaration de la fonction afficherResultat pour afficher le résultat du quiz.
 function afficherResultat(erreurs) {
    // Obtient ou crée l'élément pour afficher le résultat.
    var resultat = document.getElementById("resultat") || creerElementResultat();
    // Définit le contenu de l'élément de résultat en fonction du nombre d'erreurs.
    resultat.innerHTML = erreurs === 0 ? "Toutes les réponses sont correctes!" : "Il y a " + erreurs + " erreur(s).";
    // Change la couleur du texte en vert pour zéro erreur, sinon en rouge.
    resultat.style.color = erreurs === 0 ? "green" : "red";
 }
 