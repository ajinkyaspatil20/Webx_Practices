# Create a Flask application with a route /hello that accepts a name as a query parameter (GET method). Example: visiting /hello?name=Raj should display “Hello, Raj!” on the page.

from flask import Flask, request

app = Flask(__name__)

@app.route('/hello')
def hello():
    name = request.args.get('name', 'Guest')
    return f"Hello, {name}!"

if __name__ == '__main__':
    app.run()
