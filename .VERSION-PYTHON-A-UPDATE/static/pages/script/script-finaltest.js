// Gestion des cases à cocher pour qu'une seule case par paire puisse être cochée
 function gererCheckboxes() {
    var checkboxes = document.querySelectorAll('.question input[type=checkbox]');
    checkboxes.forEach(function (checkbox) {
       checkbox.addEventListener('change', function () {
          var name = checkbox.name;
          var pair = document.querySelectorAll('input[name="' + name + '"]');
          if (checkbox.checked) {
             pair.forEach(function (other) {
                if (other !== checkbox) other.checked = false;
             });
          }
       });
    });
 }
 
 // Appelle gererCheckboxes lorsque la page est chargée
 document.addEventListener('DOMContentLoaded', gererCheckboxes);