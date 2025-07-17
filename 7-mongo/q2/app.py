from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['company']  # Use 'company' database
employees_collection = db['employees']  # Use 'employees' collection

@app.route('/employees', methods=['GET'])
def get_employees():
    # Fetch all documents from the employees collection
    employees = list(employees_collection.find({}, {'_id': 0}))  # Exclude _id field
    return jsonify(employees)

if __name__ == '__main__':
    app.run(debug=True)