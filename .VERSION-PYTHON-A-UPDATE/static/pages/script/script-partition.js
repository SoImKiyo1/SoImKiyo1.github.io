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
   playAudio("/static/audio/test1.mp3");
}

// Fonction openImg1 qui nomme l'action demandé par le HTML
function openImg1() {
   // Appelle la fonction playAudio avec un autre chemin de fichier audio spécifique
   playAudio("/static/audio/audiobatterie.mp3");
}

// Fait par Sacha Pastor
// Fonction "gererCheckboxes" qui bloque le fait de cocher plusieurs checkbox à la fois
function gererCheckboxes(nomCheckbox) {
   // Sélectionne toutes les checkboxes avec le nom spécifié
   var checkboxes = document.querySelectorAll('input[type=checkbox][name="' + nomCheckbox + '"]');
   
   // Boucle sur chaque checkbox sélectionnée
   checkboxes.forEach(function (checkbox) {
       // Vérifie si les checkbox sont coché/décoché
       checkbox.addEventListener('change', function () {
           // Boucle sur toutes les checkboxes du même groupe (2 par 2)
           checkboxes.forEach(function (other) {
               // Décoche toutes les autres checkboxes du groupe sauf celle qui vient d'être cochée
               if (other !== checkbox) other.checked = false;
           });
       });
   });
}

// Appelle la fonction gererCheckboxes pour les groupes de checkboxes de "partition" et de "rythme".
gererCheckboxes("partition");
gererCheckboxes("rythme");

// Fonction "verifierReponses" qui permet de vérifier les réponses de l'utilisateur par rapport au réponses attendues
function verifierReponses(nomCheckbox, reponsesCorrectes, idResultat) {
   // Sélectionne la checkbox cochée
   var reponseUtilisateur = document.querySelector('input[type=checkbox][name="' + nomCheckbox + '"]:checked');
   // Obtient l'élément où afficher le résultat
   var resultat = document.getElementById(idResultat);

   // Vérifie si la checkbox cochée est la réponse correcte
   if (reponseUtilisateur && reponseUtilisateur.id === reponsesCorrectes) {
       // Si oui affiche un message de "réussite" et met la couleur du texte en vert
       resultat.innerHTML = "Bonne réponse!";
       resultat.style.color = "green";
   } else {
       // Si non change la couleur du texte en rouge et met un message "d'erreur"
       resultat.innerHTML = "Mauvaise réponse.";
       resultat.style.color = "red";
   }
}