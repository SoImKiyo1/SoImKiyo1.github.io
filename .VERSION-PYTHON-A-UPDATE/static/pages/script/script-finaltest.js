// Ajoute un écouteur d'événements au document pour exécuter du code une fois le contenu HTML complètement chargé.
document.addEventListener('DOMContentLoaded', function () {
    // Appelle la fonction gererCheckboxes une fois le document chargé, en passant une classe spécifique en tant que sélecteur.
    gererCheckboxes('.question');
 });
 
 // Déclaration de la fonction gererCheckboxes qui prend un sélecteur de classe en paramètre.
 function gererCheckboxes(selecteurClasse) {
    // Sélectionne tous les éléments checkbox dans les éléments de la classe spécifiée.
    var checkboxes = document.querySelectorAll(selecteurClasse + ' input[type=checkbox]');
 
    // Boucle sur chaque checkbox sélectionnée.
    checkboxes.forEach(function (checkbox) {
        // Ajoute un écouteur d'événement pour détecter un changement (coché/décoché) sur chaque checkbox.
        checkbox.addEventListener('change', function () {
            // Sélectionne toutes les checkboxes qui partagent le même attribut 'name' que la checkbox modifiée.
            var pair = document.querySelectorAll('input[name="' + checkbox.name + '"]');
            
            // Vérifie si la checkbox actuelle est cochée.
            if (checkbox.checked) {
                // Boucle sur chaque checkbox de la même paire (même nom).
                pair.forEach(function (other) {
                    // Décoche toutes les autres checkboxes de la même paire, sauf celle qui vient d'être cochée.
                    if (other !== checkbox) other.checked = false;
                });
            }
        });
    });
 }
 