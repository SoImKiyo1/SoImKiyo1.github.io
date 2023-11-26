// Fait par Noa Pagesse
// Fonction "playAudio" qui prend un chemin de fichier audio en tant que source
function playAudio(source) {
   // Récupère l'élément audioPlayer dans le HTML
   var audioPlayer = document.getElementById('audioPlayer');
   // Définit la source de l'audioPlayer avec le chemin fourni
   audioPlayer.src = source;
   // Déclenche la lecture de l'audio
   audioPlayer.play();
}

// Fonction openImg qui nomme l'action demandé par le HTML
function openImg() {
   // Appelle la fonction playAudio avec un chemin de fichier audio spécifique
   playAudio("/static/audio/magic.mp3");
}

// Fonction openImg1 qui nomme l'action demandé par le HTML
function openImg1() {
   // Appelle la fonction playAudio avec un autre chemin de fichier audio spécifique
   playAudio("/static/audio/magic2.mp3");
}

// Fonction openImg2 qui nomme l'action demandé par le HTML
function openImg2() {
   // Appelle la fonction playAudio avec un autre chemin de fichier audio spécifique
   playAudio("/static/audio/magic3.mp3");
}

// Fonction openImg3 qui nomme l'action demandé par le HTML
function openImg3() {
   // Appelle la fonction playAudio avec un autre chemin de fichier audio spécifique
   playAudio("/static/audio/magic4.mp3");
}

// Fait par Sacha Pastor
// Stocke toutes les réponses et les zones où doivent être entré celles-ci
var questionsEtReponses = {
   fondamentale: {
      reponse: "sol",
      selecteur: "select[name='fondamentale']"
   },
   intervalle: {
      reponse: "1,5ton",
      selecteur: "select[name='intervalle']"
   },
   quinteJuste: {
      reponse: "quintejuste",
      selecteur: "select[name='quinte juste']"
   },
   tonalite: {
      reponse: "Sol mineur",
      selecteur: "#answer1"
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
   afficherResultat(erreurs, "resultat");
}

// Fonction "afficherResultat" pour afficher le résultat du quiz en texte sur le html
function afficherResultat(erreurs, idResultat) {
   // Obtient l'élément où afficher le résultat
   var resultat = document.getElementById(idResultat) || creerElementResultat(idResultat);
   // Définit le texte en fonction du résultat
   resultat.innerHTML = erreurs === 0 ? "Toutes les réponses sont correctes!" : "Il y a " + erreurs + " erreur(s).";
   // Change la couleur du texte en vert pour aucune erreur sinon en rouge
   resultat.style.color = erreurs === 0 ? "green" : "red";
}