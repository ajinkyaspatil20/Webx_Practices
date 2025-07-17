# Create a Flask application with a route /form that displays a form to collect user name and age (using GET). When the form is submitted (POST), show a message like: "Thank you!"

from flask import Flask, request

app = Flask(__name__)

@app.route('/form', methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        return "Thank you!"
    
    return '''
    <form method="POST">
      Name: <input type="text" name="name"><br>
      Age: <input type="text" name="age"><br>
      <input type="submit" value="Submit">
    </form>
    '''

if __name__ == '__main__':
    app.run()
