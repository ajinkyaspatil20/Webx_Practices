# Using Flask and MongoDB, create a simple API with a POST route /add-employee that accepts JSON data with fields: name, empNo, and expertise.


# pip install Flask pymongo


from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['company']
employee_collection = db['employee']

@app.route('/add-employee', methods=['POST'])
def add_employee():
    data = request.get_json()

    name = data.get('name')
    empNo = data.get('empNo')
    expertise = data.get('expertise')

    if not all([name, empNo, expertise]):
        return jsonify({"error": "Missing data"}), 400

    employee_collection.insert_one({
        "name": name,
        "empNo": empNo,
        "expertise": expertise
    })

    return jsonify({"message": "Employee added successfully!"}), 201

if __name__ == '__main__':
    app.run(debug=True)

