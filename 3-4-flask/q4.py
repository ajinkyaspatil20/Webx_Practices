# Create a simple Flask app with a /login route that displays a login form with username and password fields. On submitting (POST), check if the username is admin and password is 1234, then display “Login Successful”.

from flask import Flask, request

app = Flask(__name__)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        if username == 'admin' and password == '1234':
            return "Login Successful"
        else:
            return "Invalid credentials, please try again."
    
    return '''
    <form method="POST">
      Username: <input type="text" name="username"><br>
      Password: <input type="password" name="password"><br>
      <input type="submit" value="Login">
    </form>
    '''

if __name__ == '__main__':
    app.run()
