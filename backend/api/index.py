from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Flask backend is running"

# This is needed for Vercel to discover your app
app = app