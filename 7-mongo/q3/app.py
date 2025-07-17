from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['company']  # Use the 'company' database
staff_collection = db['staff']  # Use the 'staff' collection

@app.route('/staff', methods=['GET'])
def get_staff():
    # Fetch all documents from the staff collection
    staff = list(staff_collection.find({}, {'_id': 0}))  # Exclude the _id field for cleaner output
    return jsonify(staff)

if __name__ == '__main__':
    app.run(debug=True)