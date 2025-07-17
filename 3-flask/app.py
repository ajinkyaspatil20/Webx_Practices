from flask import Flask, request, redirect, url_for


app = Flask(__name__)


# Route for Homepage
@app.route('/')
def home():
    name = request.args.get('name', 'Anonymous')
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Home</title>
    </head>
    <body>
        <h1>Welcome to Our Website, {name}!</h1>
        <p>We are glad to have you here.</p>
        <a href="/contact">Contact Us</a>
    </body>
    </html>
    """


# Route for Contact Form
@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']


        # Here, you can process the form data (e.g., store it in a database or send an email)
        print(f"Name: {name}, Email: {email}")


        return redirect(url_for('thank_you'))
   
    return """
    <!DOCTYPE html>
    <html>
    <head>
        <title>Contact Us</title>
    </head>
    <body>
        <h1>Contact Us</h1>
        <form method="post" action="/contact">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>
           
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
           
            <button type="submit">Submit</button>
        </form>
    </body>
    </html>
    """


# Route for Thank-You Page
@app.route('/thank_you')
def thank_you():
    return """
    <!DOCTYPE html>
    <html>
    <head>
        <title>Thank You</title>
    </head>
    <body>
        <h1>Thank You!</h1>
        <p>Your contact information has been received. We'll get back to you soon!</p>
        <a href="/">Go back to Home</a>
    </body>
    </html>
    """


if __name__ == '__main__':
    app.run(debug=True)