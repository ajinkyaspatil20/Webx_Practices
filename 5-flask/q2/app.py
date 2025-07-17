# "Design a Flask application with a route /hello/<name>. Pass the name variable from the route to an HTML template using render_template()."

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/hello/<name>')
def hello(name):
    return render_template('hello.html', name=name)

if __name__ == '__main__':
    app.run()
