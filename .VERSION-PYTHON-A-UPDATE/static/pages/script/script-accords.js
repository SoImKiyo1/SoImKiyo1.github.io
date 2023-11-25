function playAudio(source) {
   var audioPlayer = document.getElementById('audioPlayer');
   audioPlayer.src = source;
   audioPlayer.play();
}

function openImg() {
   playAudio("/static/audio/magic.mp3");
}

function openImg1() {
   playAudio("/static/audio/magic2.mp3");
}

function openImg2() {
   playAudio("/static/audio/magic3.mp3");
}

function openImg3() {
   playAudio("/static/audio/magic4.mp3"); // 
}

// Stocker les questions et les réponses correctes dans un objet
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