function verifierReponses() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;

  // Vérifie si les champs de prénom et de nom sont remplis
  if (firstName.trim() === '' || lastName.trim() === '') {
      alert('Veuillez remplir tous les champs avant de vérifier.');
      return;
  }

  var questions = document.querySelectorAll('.question');
  var score = 0;
  var totalQuestions = questions.length;

  for (var i = 0; i < questions.length; i++) {
      var checkboxes = questions[i].querySelectorAll('input[type="checkbox"]');
      var userAnswer = null;

      for (var j = 0; j < checkboxes.length; j++) {
          if (checkboxes[j].checked) {
              userAnswer = checkboxes[j].value === 'true';

              if (userAnswer) {
                  checkboxes[j].parentNode.style.backgroundColor = '#4caf50'; // Vert
                  score++;
              } else {
                  checkboxes[j].parentNode.style.backgroundColor = '#e57373'; // Rouge
              }

              // Désactive l'autre case
              checkboxes.forEach(function (checkbox, index) {
                  if (index !== j) {
                      checkbox.disabled = true;
                  }
              });

              break;
          }
      }
  }

  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `${firstName} ${lastName}, Votre score : ${score}/${totalQuestions} <br> Projet pour la NSI Site de E-Learning`;
}
