from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for local HTML/JS

@app.route('/')
def home():
    return "Backend for AC Company is running!"

@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # For now, just print or log
    print(f"New message from {name} ({email}): {message}")

    # In production, you can save to DB or send an email here

    return jsonify({"status": "success", "message": "Message received!"})

if __name__ == '__main__':
    app.run(debug=True)
