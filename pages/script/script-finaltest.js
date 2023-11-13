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

    // Redirige vers la page "resultats.html" avec les détails de chaque question
    var redirectURL = `resultats.html?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&score=${score}&totalQuestions=${totalQuestions}`;

    // Ajoute les détails de chaque question à l'URL
    for (var i = 0; i < totalQuestions; i++) {
        var checkboxes = questions[i].querySelectorAll('input[type="checkbox"]');
        var questionResult = [];

        for (var j = 0; j < checkboxes.length; j++) {
            questionResult.push({
                label: checkboxes[j].parentNode.textContent.trim(),
                correct: checkboxes[j].value === 'true',
                selected: checkboxes[j].checked,
            });
        }

        redirectURL += `&q${i + 1}=${encodeURIComponent(JSON.stringify(questionResult))}`;
    }

    window.location.href = redirectURL;
}

