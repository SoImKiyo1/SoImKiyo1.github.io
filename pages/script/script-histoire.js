function verifierReponses() {
    var reponsesCorrectes = ["voix", "paroles", "perfection", "troubadours", "gestes", "jeux", "messe", "motet", "chansons", "profanes", "divertissement", "raffiné", "danses", "opéra", "sonate", "orchestre", "styles", "galant", "sensible", "émotion"];
    var erreurs = 0;

    for (var i = 1; i <= reponsesCorrectes.length; i++) {
        var reponseUtilisateur = document.getElementById("mot" + i).value.toLowerCase();

        if (reponseUtilisateur !== reponsesCorrectes[i - 1]) {
            document.getElementById("mot" + i).style.border = "2px solid red";
            document.getElementById("mot" + i).placeholder = reponsesCorrectes[i - 1]; // Afficher la correction
            erreurs++;
        } else {
            document.getElementById("mot" + i).style.border = "2px solid green";
        }
    }

    var resultat = document.getElementById("resultat");
    if (erreurs === 0) {
        resultat.innerHTML = "Toutes les réponses sont correctes!";
        resultat.style.color = "green";
    } else {
        resultat.innerHTML = "Il y a " + erreurs + " erreur(s).";
        resultat.style.color = "red";
    }
}
