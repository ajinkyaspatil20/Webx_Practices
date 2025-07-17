# Create a Flask app with a route /home that renders a static HTML page named home.html using the render_template() function.

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/home')
def home():
    return render_template('home.html')

if __name__ == '__main__':
    app.run()
