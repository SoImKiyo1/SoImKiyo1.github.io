// Ajoute un écouteur d'événements pour exécuter du code une fois le contenu HTML complètement chargé.
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

// Déclaration de la fonction playAudio qui prend un chemin de fichier audio en tant que source.
function playAudio(source) {
   // Récupère l'élément audioPlayer par son ID.
   var audioPlayer = document.getElementById('audioPlayer');
   // Définit la source de l'audioPlayer avec le chemin fourni.
   audioPlayer.src = source;
   // Déclenche la lecture de l'audio.
   audioPlayer.play();
}

// Déclaration de la fonction openImg sans paramètres.
function openImg() {
   // Appelle la fonction playAudio avec un chemin de fichier audio spécifique.
   playAudio("/static/audio/test1.mp3");
}

// Déclaration de la fonction openImg1 sans paramètres.
function openImg1() {
   // Appelle la fonction playAudio avec un autre chemin de fichier audio spécifique.
   playAudio("/static/audio/audiobatterie.mp3");
}

// Déclaration de la fonction gererCheckboxes qui prend le nom d'un groupe de checkboxes en paramètre.
function gererCheckboxes(nomCheckbox) {
   // Sélectionne toutes les checkboxes avec le nom spécifié.
   var checkboxes = document.querySelectorAll('input[type=checkbox][name="' + nomCheckbox + '"]');
   
   // Boucle sur chaque checkbox sélectionnée.
   checkboxes.forEach(function (checkbox) {
       // Ajoute un écouteur d'événement pour détecter un changement (coché/décoché) sur chaque checkbox.
       checkbox.addEventListener('change', function () {
           // Boucle sur toutes les checkboxes du même groupe.
           checkboxes.forEach(function (other) {
               // Décoche toutes les autres checkboxes du groupe, sauf celle qui vient d'être cochée.
               if (other !== checkbox) other.checked = false;
           });
       });
   });
}

// Appelle la fonction gererCheckboxes pour les groupes de checkboxes 'partition' et 'rythme'.
gererCheckboxes("partition");
gererCheckboxes("rythme");

// Déclaration de la fonction verifierReponses qui prend le nom du groupe de checkboxes, la réponse correcte et l'ID de l'élément résultat.
function verifierReponses(nomCheckbox, reponsesCorrectes, idResultat) {
   // Sélectionne la checkbox cochée dans le groupe spécifié.
   var reponseUtilisateur = document.querySelector('input[type=checkbox][name="' + nomCheckbox + '"]:checked');
   // Obtient ou crée l'élément pour afficher le résultat.
   var resultat = document.getElementById(idResultat) || creerElementResultat(idResultat);

   // Vérifie si la checkbox cochée est la réponse correcte.
   if (reponseUtilisateur && reponseUtilisateur.id === reponsesCorrectes) {
       // Si oui, affiche un message de succès et change la couleur du texte en vert.
       resultat.innerHTML = "Bonne réponse!";
       resultat.style.color = "green";
   } else {
       // Sinon, affiche un message d'erreur et change la couleur du texte en rouge.
       resultat.innerHTML = "Mauvaise réponse.";
       resultat.style.color = "red";
   }
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
