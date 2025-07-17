from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    users = ["Rob Stark", "John Snow"]
    return render_template('index.html', title="Home", users=users)

@app.route('/user/<username>')
def user(username):
    return render_template('user.html', title=f"Welcome {username}", username=username)

# Add missing routes
@app.route('/about')
def about():
    return render_template('about.html', title="About")

@app.route('/contact')
def contact():
    return render_template('contact.html', title="Contact")

if __name__ == '__main__':
    app.run(debug=True)
