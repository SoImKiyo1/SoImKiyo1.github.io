 // Attente du chargement complet du document HTML
 document.addEventListener('DOMContentLoaded', function () {

    // Sélectionne l'élément avec la classe 'finalexam' dans le document
    var lienTestFinal = document.querySelector('.finalexam');

    // Ajoute un écouteur d'événement au clic sur le lien 'Test Final'
    lienTestFinal.addEventListener('click', function (event) {

        // Empêche le comportement par défaut du lien (ici, la navigation vers une autre page)
        event.preventDefault();

        // Affiche une boîte de dialogue de confirmation avec un message personnalisé
        var confirmation = confirm("Êtes-vous sûr de vouloir passer au test final ? Assurez-vous d'avoir complété toutes les lessons.");

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
    playAudio("../audio/magic.mp3");
}

function openImg1() {
    playAudio("../audio/magic2.mp3");
}

function openImg2() {
    playAudio("../audio/magic3.mp3");
}

function openImg3() {
    playAudio("../audio/magic 4.mp3"); // Assure-toi que le nom de fichier est correct
}
