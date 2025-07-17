from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['collegeDB']  # Use the 'collegeDB' database
students_collection = db['students']  # Use the 'students' collection

@app.route('/add-student', methods=['POST'])
def add_student():
    # Get JSON data from the request
    student_data = request.get_json()

    # Ensure the data contains the necessary fields
    if 'name' not in student_data or 'rollNo' not in student_data or 'department' not in student_data:
        return jsonify({"error": "Missing required fields: name, rollNo, department"}), 400
    
    # Insert the student data into the 'students' collection
    students_collection.insert_one(student_data)

    # Return a success response
    return jsonify({"message": "Student added successfully!"}), 201

if __name__ == '__main__':
    app.run(debug=True)

