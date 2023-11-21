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
