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
 
 // Tableau avec les réponses attendues dans l'ordre
 var reponsesCorrectes = ["voix", "paroles", "perfection", "troubadours", "gestes", "jeux", "messe", "motet", "chansons", "profanes", "divertissement", "raffiné", "danses", "opéra", "sonate", "orchestre", "styles", "galant", "sensible", "émotion"];
 
 // Fonction pour vérifier les réponses de l'utilisateur par rapport au réponses attendues
 function verifierReponses() {
    var erreurs = 0; // Initialisation du compteur d'erreurs
 
    // Boucle sur chaque question dans le tableau "reponsesCorrectes"
    for (var i = 1; i <= reponsesCorrectes.length; i++) {
        // Sélectionne l'élément avec l'id "mot" suivi du numéro de la question
        var element = document.getElementById("mot" + i);
        // Récupère la réponse de l'utilisateur et la convertit en minuscules pour la comparaison (Pour accepter la réponse même avec des Majuscules/Minuscules différentes de la réponse attendue)
        var reponseUtilisateur = element.value.toLowerCase();
 
        // Compare la réponse de l'utilisateur à la réponse attendue
        if (reponseUtilisateur !== reponsesCorrectes[i - 1]) {
            // Change la couleur de la bordure de l'élément en rouge si la réponse est différente
            element.style.border = "2px solid red";
            // Affiche la bonne réponse comme placeholder
            element.placeholder = reponsesCorrectes[i - 1];
            // Augmente le compteur d'erreur
            erreurs++;
        } else {
            // Change la couleur de la bordure de l'élément en vert si la réponse est identique
            element.style.border = "2px solid green";
        }
    }
 
    // Appelle la fonction afficherResultat pour montrer le résultat
    afficherResultat(erreurs, "resultat");
 }
 
 // Fonction "afficherResultat" pour afficher le résultat du quiz en texte sur le html
 function afficherResultat(erreurs, idResultat) {
    // Obtient l'élément où afficher le résultat
    var resultat = document.getElementById(idResultat);
    // Définit le texte en fonction du résultat
    resultat.innerHTML = erreurs === 0 ? "Toutes les réponses sont correctes!" : "Il y a " + erreurs + " erreur(s).";
    // Change la couleur du texte en vert pour aucune erreur sinon en rouge
    resultat.style.color = erreurs === 0 ? "green" : "red";
 }