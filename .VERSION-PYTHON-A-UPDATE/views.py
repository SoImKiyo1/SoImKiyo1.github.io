# Code Python Fait par Sacha Pastor
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST']) # Page d’accueil
def index():
    return render_template("index.html")

@app.route('/pages/accords.html') # Page cours sur les accords
def accords():
    return render_template("/pages/accords.html")

@app.route('/pages/finaltest.html') # Page du test final (qcm)
def finaltest():
    return render_template("/pages/finaltest.html")

@app.route('/pages/histoire.html') # Page cours sur l'histoire de la musique
def histoire():
    return render_template("/pages/histoire.html")

@app.route('/pages/partition.html') # Page cours sur les partitions
def partition():
    return render_template("/pages/partition.html")

@app.route('/pages/tonalite.html') # Page cours sur les tonalités
def tonalite():
    return render_template("/pages/tonalite.html")

@app.route('/resultat', methods=['GET', 'POST']) # Page des résultats
def resultat():
        result = request.form # récupération des données du formulaire dans un dictionnaire
        score = 0 # Initialise le score (0/totalquestions)
        totalQuestions = 5 # Initialise le nombre total de questions (score/5)
        reponses_correctes = {"question1": "3 notes", "question2": "La renaissance", "question3": "Monter la note d'1/2 ton", "question4": "Descendre la note d'1/2 ton", "question5": "2 temps"} # Définit les réponses correctes pour chaque question (Pour la correction)
        corrections = {} # Initialise un dictionnaire pour les corrections

        for key, value in reponses_correctes.items(): # Boucle for pour chaque question et réponse correcte (key fait référence au "question1"/"question2"/ect dans le dictionnaire "reponses_correctes" // value fait référence au réponse correctes "3 notes"/"La renaissance"/ect dans le même dictionnaire)
            reponse_soumise = result.get(key, "Aucune réponse") # Récupère la réponse soumise par l'utilisateur pour chaque question (De base il est écrit "None" mais là on remplace par "Aucune réponse")
            corrections[key] = {"attendue": value, "soumise": reponse_soumise} # Stocke la réponse attendue et la réponse soumise dans le dictionnaire "corrections" par rapport à la key lié (question1/question2/ect)
            if reponse_soumise == value: # Augmente le score si la réponse est correcte
                score += 1

        # (Il est plus sûr de mettre .get car dans le cas où les chaînes sont vide elle seront automatiquement remplie (dans notre cas par du vide : '') donc le site ne renverra pas d'erreur par rapport à des chaînes non existantes (par exemple quand on essaye d'accéder à la page résultats sans avoir remplie le formulaire))
        nom = result.get('nom', '') # Récupération de la valeur nom envoyée par le formulaire
        prenom = result.get('prenom', '') # Récupération de la valeur prénom envoyée par le formulaire

        return render_template("/pages/resultats.html", nom=nom, prenom=prenom, score=score, totalQuestions=totalQuestions, corrections=corrections) # On renvoie la page avec les variables nom/prenom/score/totalquestions/corrections

app.run(debug=True)
