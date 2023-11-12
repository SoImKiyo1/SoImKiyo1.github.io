function verifierReponses() {
    var questions = document.querySelectorAll('.question');
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
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
  
          // Désactive l'autre case de la même question
          checkboxes.forEach(function (otherCheckbox, index) {
            if (index !== j) {
              otherCheckbox.disabled = true;
            }
          });
  
          break;
        }
      }
    }
  
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `${firstName} ${lastName}, Votre score : ${score}/${totalQuestions} <br> Projet pour la NSI Site de E-Learning`;
  }
  
  // Ajout d'un gestionnaire d'événements pour chaque paire de cases de la même question
  var questions = document.querySelectorAll('.question');
  questions.forEach(function (question) {
    var checkboxes = question.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
        // Désactive toutes les autres cases de la même question
        checkboxes.forEach(function (otherCheckbox) {
          if (otherCheckbox !== checkbox) {
            otherCheckbox.disabled = checkbox.checked;
          }
        });
      });
    });
  });
  