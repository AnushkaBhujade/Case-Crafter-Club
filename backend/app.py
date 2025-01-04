from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route('/events', methods=['GET'])
def get_events():
    with open('events.json', 'r') as file:
        events = json.load(file)
    return jsonify(events)

if __name__ == '__main__':
    app.run(debug=True)
