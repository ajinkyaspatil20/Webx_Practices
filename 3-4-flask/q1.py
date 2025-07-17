# Using Flask, create a basic web application with two routes: The root route (/) should display a welcome message. Another route (/about) should display a short ""About Us"" message.

from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to our website!"

@app.route('/about')
def about():
    return "About Us: We are learning Flask."

if __name__ == '__main__':
    app.run()
