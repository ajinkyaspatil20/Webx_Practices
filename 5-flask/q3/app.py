# "Create a Flask app with a route /students that passes a list of student names to an HTML template. Use a for loop in the template to display the list in bullet points."

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/students')
def students():
    names = ['Alice', 'Bob', 'Charlie', 'David']
    return render_template('students.html', students=names)

if __name__ == '__main__':
    app.run()
