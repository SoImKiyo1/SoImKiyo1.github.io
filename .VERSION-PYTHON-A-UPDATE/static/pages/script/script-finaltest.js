// Fait Par Sacha Pastor
// Permet d'attendre que le contenu HTML est complètement chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', function () {
    // Appelle la fonction gererCheckboxes une fois le html chargé
    gererCheckboxes('.question');
 });
 
// Fonction "gererCheckboxes" qui bloque le fait de cocher plusieurs checkbox à la fois
 function gererCheckboxes(selecteurClasse) {
    // Sélectionne toutes les checkboxes avec le nom spécifié
    var checkboxes = document.querySelectorAll(selecteurClasse + ' input[type=checkbox]');
 
    // Boucle sur chaque checkbox sélectionnée
    checkboxes.forEach(function (checkbox) {
        // Vérifie si les checkbox sont coché/décoché
        checkbox.addEventListener('change', function () {
            // Sélectionne toutes les checkboxes qui partagent le même attribut "name" que la checkbox coché/décoché
            var pair = document.querySelectorAll('input[name="' + checkbox.name + '"]');
            
            // Vérifie si la checkbox actuelle est cochée
            if (checkbox.checked) {
                // Boucle sur toutes les checkboxes du même groupe (2 par 2)
                pair.forEach(function (other) {
                    // Décoche toutes les autres checkboxes du groupe sauf celle qui vient d'être cochée
                    if (other !== checkbox) other.checked = false;
                });
            }
        });
    });
 }
 