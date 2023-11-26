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