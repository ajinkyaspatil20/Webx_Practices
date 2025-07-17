# Build a basic Flask app with three routes:/ (Home Page),  /contact (Contact Page), /login (Login Page). Use url_for() in templates to link between these routes. Each page should have links to the other two pages using buttons or anchor tags.


from flask import Flask, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return '''
    <h1>Home Page</h1>
    <a href="{0}"><button>Contact</button></a>
    <a href="{1}"><button>Login</button></a>
    '''.format(url_for('contact'), url_for('login'))

@app.route('/contact')
def contact():
    return '''
    <h1>Contact Page</h1>
    <a href="{0}"><button>Home</button></a>
    <a href="{1}"><button>Login</button></a>
    '''.format(url_for('home'), url_for('login'))

@app.route('/login')
def login():
    return '''
    <h1>Login Page</h1>
    <a href="{0}"><button>Home</button></a>
    <a href="{1}"><button>Contact</button></a>
    '''.format(url_for('home'), url_for('contact'))

if __name__ == '__main__':
    app.run(debug=True)
