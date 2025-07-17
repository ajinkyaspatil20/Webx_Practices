# "Build a Flask app with a route /feedback that displays a form using an HTML template. When the user submits their name and feedback (POST), show the submitted data below the form on the same page."

from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/feedback', methods=['GET', 'POST'])
def feedback():
    name = ''
    feedback = ''
    if request.method == 'POST':
        name = request.form.get('name')
        feedback = request.form.get('feedback')
    return render_template('feedback.html', name=name, feedback=feedback)

if __name__ == '__main__':
    app.run()
