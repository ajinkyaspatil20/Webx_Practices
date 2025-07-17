from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['collegeDB']
students_collection = db['students']

@app.route('/students', methods=['GET'])
def get_students():
    # Fetch all documents from the students collection
    students = list(students_collection.find({}, {'_id': 0}))  # Exclude the _id field
    return jsonify(students)

if __name__ == '__main__':
    app.run(debug=True)
