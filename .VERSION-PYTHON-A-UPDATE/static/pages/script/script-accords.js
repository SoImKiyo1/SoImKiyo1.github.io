// Déclaration de la fonction playAudio qui prend un chemin de fichier audio en tant que source.
function playAudio(source) {
   // Récupère l'élément audioPlayer par son ID.
   var audioPlayer = document.getElementById('audioPlayer');
   // Définit la source de l'audioPlayer avec le chemin fourni.
   audioPlayer.src = source;
   // Déclenche la lecture de l'audio.
   audioPlayer.play();
}

// Déclaration de la fonction openImg qui prend un chemin d'audio et appelle playAudio.
function openImg(audioPath) {
   // Appelle la fonction playAudio avec le chemin d'audio fourni.
   playAudio(audioPath);
}

// Déclaration d'un objet questionsEtReponses contenant des paires question/réponse.
var questionsEtReponses = {
   fondamentale: { reponse: "sol", selecteur: "select[name='fondamentale']" }, // Question sur la note fondamentale
   intervalle: { reponse: "1,5ton", selecteur: "select[name='intervalle']" }, // Question sur l'intervalle
   quinteJuste: { reponse: "quintejuste", selecteur: "select[name='quinte juste']" }, // Question sur la quinte juste
   tonalite: { reponse: "Sol mineur", selecteur: "#answer1" } // Question sur la tonalité
};

// Déclaration de la fonction verifierReponses pour évaluer les réponses données par l'utilisateur.
function verifierReponses() {
   var erreurs = 0; // Initialisation du compteur d'erreurs.

   // Boucle sur chaque question dans l'objet questionsEtReponses.
   for (var question in questionsEtReponses) {
       // Sélectionne l'élément correspondant au sélecteur de la question actuelle.
       var element = document.querySelector(questionsEtReponses[question].selecteur);
       // Récupère la réponse de l'utilisateur en minuscules pour la comparaison.
       var reponseUtilisateur = element.value.toLowerCase();
       // Convertit la réponse correcte en minuscules pour la comparaison.
       var bonneReponse = questionsEtReponses[question].reponse.toLowerCase();

       // Compare la réponse de l'utilisateur à la bonne réponse.
       if (reponseUtilisateur !== bonneReponse) {
           // Si la réponse est incorrecte, applique un style de bordure rouge à l'élément.
           element.style.border = "2px solid red";
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
