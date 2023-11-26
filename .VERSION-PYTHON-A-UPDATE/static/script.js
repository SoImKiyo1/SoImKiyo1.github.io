// Écoute l'événement 'DOMContentLoaded' pour exécuter du code une fois que le contenu HTML est complètement chargé.
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionne l'élément avec la classe 'finalexam'.
    var lienTestFinal = document.querySelector('.finalexam');
 
    // Ajoute un écouteur d'événement de clic sur l'élément sélectionné.
    lienTestFinal.addEventListener('click', function (event) {
        // Empêche le comportement par défaut du lien (empêcher la navigation vers l'URL du lien).
        event.preventDefault();
        // Affiche une boîte de dialogue de confirmation avec un message personnalisé.
        var confirmation = confirm("Êtes-vous sûr de vouloir passer au test final ? Assurez-vous d'avoir complété toutes les leçons.");
        
        // Vérifie si l'utilisateur a cliqué sur "OK" dans la boîte de dialogue.
        if (confirmation) {
            // Si l'utilisateur confirme, redirige vers l'URL spécifiée dans l'attribut href de 'lienTestFinal'.
            window.location.href = lienTestFinal.href;
        }
    });
 });