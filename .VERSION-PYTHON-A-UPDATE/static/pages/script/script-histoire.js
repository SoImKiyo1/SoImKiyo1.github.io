// Écoute l'événement de chargement complet du document HTML.
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionne l'élément avec la classe 'finalexam' dans le document.
    var lienTestFinal = document.querySelector('.finalexam');
 
    // Ajoute un écouteur d'événement pour réagir au clic sur cet élément.
    lienTestFinal.addEventListener('click', function (event) {
        // Empêche le comportement par défaut du lien (par exemple, empêcher la navigation automatique).
        event.preventDefault();
        // Affiche une boîte de dialogue de confirmation avec un message personnalisé.
        var confirmation = confirm("Êtes-vous sûr de vouloir passer au test final ? Assurez-vous d'avoir complété toutes les leçons.");
        
        // Vérifie si l'utilisateur a confirmé dans la boîte de dialogue.
        if (confirmation) {
            // Si confirmé, redirige l'utilisateur vers l'URL spécifiée dans l'attribut href de 'lienTestFinal'.
            window.location.href = lienTestFinal.href;
        }
    });
 });
 
 // Déclare un tableau de réponses correctes pour les questions.
 var reponsesCorrectes = ["voix", "paroles", "perfection", "troubadours", "gestes", "jeux", "messe", "motet", "chansons", "profanes", "divertissement", "raffiné", "danses", "opéra", "sonate", "orchestre", "styles", "galant", "sensible", "émotion"];
 
 // Déclaration de la fonction verifierReponses pour évaluer les réponses données par l'utilisateur.
 function verifierReponses() {
    var erreurs = 0; // Initialisation du compteur d'erreurs.
 
    // Boucle sur chaque réponse dans le tableau reponsesCorrectes.
    for (var i = 1; i <= reponsesCorrectes.length; i++) {
        // Sélectionne l'élément avec l'id 'mot' suivi du numéro de la question.
        var element = document.getElementById("mot" + i);
        // Récupère la réponse de l'utilisateur en minuscules pour la comparaison.
        var reponseUtilisateur = element.value.toLowerCase();
 
        // Compare la réponse de l'utilisateur à la bonne réponse.
        if (reponseUtilisateur !== reponsesCorrectes[i - 1]) {
            // Si la réponse est incorrecte, applique un style de bordure rouge à l'élément.
            element.style.border = "2px solid red";
            // Affiche la bonne réponse comme placeholder.
            element.placeholder = reponsesCorrectes[i - 1];
            // Incrémente le compteur d'erreurs.
            erreurs++;
        } else {
            // Si la réponse est correcte, applique un style de bordure verte à l'élément.
            element.style.border = "2px solid green";
        }
    }
 
    // Appelle la fonction afficherResultat pour montrer le nombre d'erreurs.
    afficherResultat(erreurs, "resultat");
 }
 
 // Déclaration de la fonction afficherResultat pour afficher les résultats du quiz.
 function afficherResultat(erreurs, idResultat) {
    // Obtient ou crée l'élément pour afficher le résultat.
    var resultat = document.getElementById(idResultat) || creerElementResultat(idResultat);
    // Définit le contenu de l'élément de résultat en fonction du nombre d'erreurs.
    resultat.innerHTML = erreurs === 0 ? "Toutes les réponses sont correctes!" : "Il y a " + erreurs + " erreur(s).";
    // Change la couleur du texte en vert pour zéro erreur, sinon en rouge.
    resultat.style.color = erreurs === 0 ? "green" : "red";
 }
 
 // Déclaration de la fonction creerElementResultat pour créer un élément de résultat si nécessaire.
 function creerElementResultat(id) {
    // Crée un nouvel élément div.
    var resultat = document.createElement("div");
    // Attribue l'ID fourni à l'élément.
    resultat.id = id;
    // Ajoute l'élément créé au corps du document.
    document.body.appendChild(resultat);
    // Retourne l'élément résultat.
    return resultat;
 }
 