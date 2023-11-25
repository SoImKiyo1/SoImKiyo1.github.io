function verifierReponses() {
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var score = 0;
    var totalQuestions = 5;
    var reponsesUtilisateur = {};
 
    // Réponses correctes
    var reponsesCorrectes = {
       'question1': "3 notes",
       'question2': "La renaissance",
       'question3': "Monter la note d'1/2 ton",
       'question4': "Descendre la note d'1/2 ton",
       'question5': "2 temps",
    };
 
    // Vérifie les réponses
    for (var question in reponsesCorrectes) {
       var reponses = document.querySelectorAll('input[name="' + question + '"]:checked');
       reponsesUtilisateur[question] = Array.from(reponses).map(function (elem) {
          return elem.value;
       }).join(", ");
       if (reponses.length === 1 && reponses[0].value === reponsesCorrectes[question]) {
          score++;
       }
    }
 
    // Stocker les résultats et les réponses correctes dans localStorage
    localStorage.setItem('nom', nom);
    localStorage.setItem('prenom', prenom);
    localStorage.setItem('score', score);
    localStorage.setItem('totalQuestions', totalQuestions);
    localStorage.setItem('reponsesUtilisateur', JSON.stringify(reponsesUtilisateur));
    localStorage.setItem('reponsesCorrectes', JSON.stringify(reponsesCorrectes));
 
    // Redirection vers la page de résultats
    window.location.href = 'resultats.html';
 }
 
 // Gestion des cases à cocher pour qu'une seule case par paire puisse être cochée
 function gererCheckboxes() {
    var checkboxes = document.querySelectorAll('.question input[type=checkbox]');
    checkboxes.forEach(function (checkbox) {
       checkbox.addEventListener('change', function () {
          var name = checkbox.name;
          var pair = document.querySelectorAll('input[name="' + name + '"]');
          if (checkbox.checked) {
             pair.forEach(function (other) {
                if (other !== checkbox) other.checked = false;
             });
          }
       });
    });
 }
 
 // Appelle gererCheckboxes lorsque la page est chargée
 document.addEventListener('DOMContentLoaded', gererCheckboxes);