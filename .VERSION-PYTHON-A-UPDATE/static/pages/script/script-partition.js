// Attente du chargement complet du document HTML
document.addEventListener('DOMContentLoaded', function () {

    // Sélectionne l'élément avec la classe 'finalexam' dans le document
    var lienTestFinal = document.querySelector('.finalexam');
 
    // Ajoute un écouteur d'événement au clic sur le lien 'Test Final'
    lienTestFinal.addEventListener('click', function (event) {
 
       // Empêche le comportement par défaut du lien (ici, la navigation vers une autre page)
       event.preventDefault();
 
       // Affiche une boîte de dialogue de confirmation avec un message personnalisé
       var confirmation = confirm("Êtes-vous sûr de vouloir passer au test final ? Assurez-vous d'avoir complété toutes les leçons.");
 
       // Si l'utilisateur confirme
       if (confirmation) {
          // Redirige l'utilisateur vers l'URL du lien 'Test Final'
          window.location.href = lienTestFinal.href;
       }
    });
 });
 
 function playAudio(source) {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = source;
    audioPlayer.play();
 }

 function openImg() {
   playAudio("/static/audio/test1.mp3");
}
 
 function openImg1() {
   playAudio("/static/audio/audiobatterie.mp3");
}
 
 // Gestion des cases à cocher pour qu'une seule case puisse être cochée
 function gererCheckboxes() {
    var checkboxes = document.querySelectorAll('input[type=checkbox][name="partition"]');
    checkboxes.forEach(function (checkbox) {
       checkbox.addEventListener('change', function () {
          checkboxes.forEach(function (other) {
             if (other !== checkbox) other.checked = false;
          });
       });
    });
 }

  // Gestion des cases à cocher pour qu'une seule case puisse être cochée
  function gererCheckboxes2() {
   var checkboxes = document.querySelectorAll('input[type=checkbox][name="rythme"]');
   checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
         checkboxes.forEach(function (other) {
            if (other !== checkbox) other.checked = false;
         });
      });
   });
}
 
 // Vérification des réponses
 function verifierReponses() {
    var reponsesCorrectes = "part1"; // Remplacer par l'ID de la bonne case à cocher
    var reponseUtilisateur = document.querySelector('input[type=checkbox][name="partition"]:checked');
 
    var resultat = document.getElementById("resultat");
    if (reponseUtilisateur && reponseUtilisateur.id === reponsesCorrectes) {
       resultat.innerHTML = "Bonne réponse!";
       resultat.style.color = "green";
    } else {
       resultat.innerHTML = "Mauvaise réponse.";
       resultat.style.color = "red";
    }
 }
 
 // Initialiser la gestion des cases à cocher
 gererCheckboxes();

  // Vérification des réponses
  function verifierReponses2() {
   var reponsesCorrectes = "ryt3"; // Remplacer par l'ID de la bonne case à cocher
   var reponseUtilisateur = document.querySelector('input[type=checkbox][name="rythme"]:checked');

   var resultat = document.getElementById("resultat1");
   if (reponseUtilisateur && reponseUtilisateur.id === reponsesCorrectes) {
      resultat.innerHTML = "Bonne réponse!";
      resultat.style.color = "green";
   } else {
      resultat.innerHTML = "Mauvaise réponse.";
      resultat.style.color = "red";
   }
}

// Initialiser la gestion des cases à cocher
gererCheckboxes2();