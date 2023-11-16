function checkAnswers() {
    let score = 0;
    const correctAnswers = ["Ré", "Si bémol"]; // Remplir avec les bonnes réponses

    // Vérifie chaque réponse
    for (let i = 1; i <= correctAnswers.length; i++) {
        let userAnswer = document.getElementById(`answer${i}`).value;
        if (userAnswer.toLowerCase() === correctAnswers[i-1].toLowerCase()) {
            score++;
        }
    }

    // Affiche le résultat
    document.getElementById("result").innerText = `Votre score : ${score} sur ${correctAnswers.length}`;
}
