window.onload = function() {
    var nom = localStorage.getItem('nom');
    var prenom = localStorage.getItem('prenom');
    var score = localStorage.getItem('score');
    var totalQuestions = localStorage.getItem('totalQuestions');
    var reponsesUtilisateur = JSON.parse(localStorage.getItem('reponsesUtilisateur'));
    var reponsesCorrectes = JSON.parse(localStorage.getItem('reponsesCorrectes'));

    var resultatsDiv = document.getElementById('resultats');
    var resultatHTML = "<h1>Résultats pour " + prenom + " " + nom + "</h1>" +
                       "<p>Score: " + score + " / " + totalQuestions + "</p>";

    resultatHTML += "<h2>Corrections:</h2>";

    for (var question in reponsesUtilisateur) {
        resultatHTML += "<p>" + question + ": " +
                        "<br>Réponse attendue: " + (reponsesCorrectes[question] || "Pas de réponse") +
                        "<br>Réponse soumise: " + (reponsesUtilisateur[question] || "Aucune réponse") + "</p>";
    }

    resultatsDiv.innerHTML = resultatHTML;
}