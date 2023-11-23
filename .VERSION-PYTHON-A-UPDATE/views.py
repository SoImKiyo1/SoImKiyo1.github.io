
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template("index.html")

@app.route('/templates/404.html')
def error404():
    return render_template("404.html")

@app.route('/pages/accords.html')
def accords():
    return render_template("/pages/accords.html")

@app.route('/pages/finaltest.html')
def finaltest():
    return render_template("/pages/finaltest.html")

@app.route('/pages/histoire.html')
def histoire():
    return render_template("/pages/histoire.html")

@app.route('/pages/partition.html')
def partition():
    return render_template("/pages/partition.html")

@app.route('/pages/resultats.html')
def resultats():
    return render_template("/pages/resultats.html")

@app.route('/pages/tonalite.html')
def tonalite():
    return render_template("/pages/tonalite.html")



@app.route('/resultat', methods=['GET', 'POST'])
def resultat():
    if request.method == 'POST':
        result = request.form
        score = 0
        totalQuestions = 5
        reponses_correctes = {'question1': 'vrai', 'question2': 'vrai', 'question3': 'faux', 'question4': 'vrai', 'question5': 'faux'}
        corrections = {}

        for key, value in reponses_correctes.items():
            reponse_soumise = result.get(key, "Aucune réponse")
            corrections[key] = {'attendue': value, 'soumise': reponse_soumise}
            if reponse_soumise == value:
                score += 1

        return render_template("/pages/resultats.html", nom=result.get('nom'), prenom=result.get('prenom'), score=score, totalQuestions=totalQuestions, corrections=corrections)
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)