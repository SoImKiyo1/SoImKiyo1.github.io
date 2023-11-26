# Importation des modules nécessaires depuis le framework Flask.
from flask import Flask, render_template, request

# Création d'une instance de l'application Flask.
app = Flask(__name__)

# Définition d'une route pour la racine ('/') avec prise en charge des méthodes GET et POST.
@app.route('/', methods=['GET', 'POST'])
def index():
    # Renvoie la page 'index.html' lorsque la route est accédée.
    return render_template("index.html")

# Définition d'une route pour la page 'accords.html'.
@app.route('/pages/accords.html')
def accords():
    # Renvoie la page 'accords.html' lors de l'accès à cette route.
    return render_template("/pages/accords.html")

# Définition d'une route pour la page 'finaltest.html'.
@app.route('/pages/finaltest.html')
def finaltest():
    # Renvoie la page 'finaltest.html' lors de l'accès à cette route.
    return render_template("/pages/finaltest.html")

# Définition d'une route pour la page 'histoire.html'.
@app.route('/pages/histoire.html')
def histoire():
    # Renvoie la page 'histoire.html' lors de l'accès à cette route.
    return render_template("/pages/histoire.html")

# Définition d'une route pour la page 'partition.html'.
@app.route('/pages/partition.html')
def partition():
    # Renvoie la page 'partition.html' lors de l'accès à cette route.
    return render_template("/pages/partition.html")

# Définition d'une route pour la page 'resultats.html'.
@app.route('/pages/resultats.html')
def resultats():
    # Renvoie la page 'resultats.html' lors de l'accès à cette route.
    return render_template("/pages/resultats.html")

# Définition d'une route pour la page 'tonalite.html'.
@app.route('/pages/tonalite.html')
def tonalite():
    # Renvoie la page 'tonalite.html' lors de l'accès à cette route.
    return render_template("/pages/tonalite.html")

# Définition d'une route pour traiter les résultats du test ('/resultat') avec prise en charge des méthodes GET et POST.
@app.route('/resultat', methods=['GET', 'POST'])
def resultat():
    # Vérifie si la requête est de type POST (soumission de formulaire).
    if request.method == 'POST':
        # Récupère les données soumises du formulaire.
        result = request.form
        # Initialise le score et le nombre total de questions.
        score = 0
        totalQuestions = 5
        # Définit les réponses correctes pour chaque question.
        reponses_correctes = {"question1": "3 notes", "question2": "La renaissance", "question3": "Monter la note d'1/2 ton", "question4": "Descendre la note d'1/2 ton", "question5": "2 temps"}
        # Initialise un dictionnaire pour les corrections.
        corrections = {}

        # Boucle sur chaque question et réponse correcte.
        for key, value in reponses_correctes.items():
            # Récupère la réponse soumise par l'utilisateur pour chaque question.
            reponse_soumise = result.get(key, "Aucune réponse")
            # Stocke la réponse attendue et la réponse soumise dans 'corrections'.
            corrections[key] = {"attendue": value, "soumise": reponse_soumise}
            # Incrémente le score si la réponse est correcte.
            if reponse_soumise == value:
                score += 1

        # Renvoie la page 'resultats.html' avec les données du résultat du test.
        return render_template("/pages/resultats.html", nom=result.get('nom'), prenom=result.get('prenom'), score=score, totalQuestions=totalQuestions, corrections=corrections)
    # Si la méthode n'est pas POST, renvoie l'utilisateur à la page d'accueil.
    return render_template("index.html")

# Vérifie si le script est exécuté directement (et non importé) pour démarrer l'application Flask.
if __name__ == "__main__":
    app.run(debug=True)
