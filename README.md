# SoImKiyo1.github.io

A Project for NSI 

TO-DO LIST :
- Création des fichiers V
- Finalisation du design V
- Changements des tailles V
- Ajouts de tout les textes V
- Finalisation de la page home V
- Finalisation de la page partition V
- Finalisation de la page histoire V
- Finalisation de la page finaltest V
- Finalisation de la page accords V
- Finalisation de la page tonalite X
- Finalisation de la page resultat V
- Ajout d'un systeme pour recuperer des infos pour la page resultat (peutetre du php) V
- Ajouts de tout les tests V
- Ajouts des pop up en JavaScript V
- Ajouts de toutes les images V
- Resolution des bugs V
- Optimisation du code V

- Responsive
    - Tonalite X
    - Accords X
    - Index V
    - 404 V
    - resultats V
    - histoire V
    - finaltest V
    - partition X

- Amelioration SEO X

- Documentation Wiki + Code
    - CODE :
        - HTML :
            - Tonalite V
            - Accords V
            - Index V
            - 404 V
            - resultats V
            - histoire V
            - finaltest V
            - partition V
        - CSS :
            - Tonalite X
            - Accords X
            - Index X
            - 404 X
            - resultats X
            - histoire X 
            - finaltest X
            - partition X
        - JS : 
            - Tonalite X
            - Accords X
            - Index X
            - resultats X
            - histoire X
            - finaltest X
            - partition X 
    - WIKI :
        - HTML :
            - Tonalite X
            - Accords X
            - Index V
            - 404 X
            - resultats X
            - histoire X
            - finaltest X
            - partition X
        - CSS :
            - Tonalite X
            - Accords X
            - Index X
            - 404 X
            - resultats X
            - histoire X 
            - finaltest X
            - partition X
        - JS : 
            - Tonalite
            - Accords
            - Index
            - resultats
            - histoire
            - finaltest
            - partition

- Correction fautes d'orthographes X
- Creation de la Video V 
- Compréhension du code (Par tout le monde) X

- !!!!!!! CHANGER LE RESULTAT QCM POUR QUIL SOIT GERER PAR PYTHON !!!!!!

finaltest.html : 

<!DOCTYPE html>
<html lang="fr">
   <head>
      <!-- ... (le reste de l'en-tête reste inchangé) ... -->
   </head>
   <body>
      <!-- ... (le reste du corps reste inchangé) ... -->
      <!-- Modification du formulaire -->
      <form id="qcmForm" action="/resultat" method="post">
         <!-- Les champs pour le nom et le prénom -->
         <div class="form-row">
            <!-- ... (les champs Nom et Prénom restent inchangés) ... -->
         </div>
         <!-- Questions -->
         <!-- ... (les questions restent inchangées) ... -->
         <input type="submit" value="Vérifier">
      </form>
      <!-- ... (le reste du corps reste inchangé) ... -->
   </body>
</html>

Mise à jour du serveur Flask :

from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template("index.html")

@app.route('/resultat', methods=['GET', 'POST'])
def resultat():
    if request.method == 'POST':
        result = request.form
        score = 0
        reponses_correctes = {'question1': 'vrai', 'question2': 'faux', 'question3': 'vrai'}
        for key, value in reponses_correctes.items():
            if result.get(key) == value:
                score += 1
        data = {'nom': result.get('nom'), 'prenom': result.get('prenom'), 'score': score}
        return render_template("resultats.html", data=data)
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)


resultats.html :

<!DOCTYPE html>
<html lang="fr">
   <head>
      <!-- ... (le reste de l'en-tête reste inchangé) ... -->
   </head>
   <body>
      <!-- ... (le reste du corps reste inchangé) ... -->
      <!-- Zone d'affichage des résultats -->
      <div id="resultats">
         <h1>Résultats pour {{ data.prenom }} {{ data.nom }}</h1>
         <p>Score: {{ data.score }} sur le total des questions</p>
         <!-- Autres détails si nécessaire -->
      </div>
      <!-- ... (le reste du corps reste inchangé) ... -->
   </body>
</html>
