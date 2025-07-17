from flask import Flask, render_template, request, url_for


app = Flask(__name__)


@app.route('/')
def home():
    return f"""
    <h1>Welcome to the Flask App</h1>
    <p>This is a simple web application built with Flask. Navigate through the links below to explore different pages.</p>
    <ul>
        <li><a href="{url_for('profile', username='Rob')}">Go to Profile Page (Rob)</a></li>
        <li><a href="{url_for('submit')}">Fill Out the Submission Form</a></li>
    </ul>
    <p>Flask makes web development easy and efficient. Enjoy your visit!</p>
    """


@app.route('/profile/<username>')
def profile(username):
    return f"""
    <h1>Welcome, {username}!</h1>
    <p>Hello {username}, we are glad to have you here. This is your personal profile page.</p>
    <p>Feel free to explore the app, and don't forget to check out the form submission page!</p>
    <a href="{url_for('home')}">Back to Home</a>
    """


@app.route('/submit', methods=['GET', 'POST'])
def submit():
    if request.method == 'POST':
        name = request.form['name']
        age = request.form['age']
        return f"""
        <h1>Submission Successful</h1>
        <p>Thank you, <strong>{name}</strong>. We appreciate your input.</p>
        <p>According to our records, you are <strong>{age}</strong> years old.</p>
        <a href="{url_for('home')}">Return to Home</a>
        """


    return """
    <h1>Submit Your Information</h1>
    <p>Please fill out the form below with your details.</p>
    <form method="POST">
        <label>Name:</label>
        <input type="text" name="name" required><br><br>
        <label>Age:</label>
        <input type="number" name="age" required><br><br>
        <input type="submit" value="Submit">
    </form>
    <br>
    <a href="/">Back to Home</a>
    """


if __name__ == '__main__':
    app.run(debug=True)
