# "Create a Flask route /marks/<int:score> that takes a score from the URL and passes it to a template. Use a conditional block (if, else) in the HTML template to display: “Pass” if score ≥ 40 “Fail” if score < 40"


from flask import Flask, render_template

app = Flask(__name__)

@app.route('/marks/<int:score>')
def marks(score):
    return render_template('result.html', marks=score)

if __name__ == '__main__':
    app.run(debug=True)
