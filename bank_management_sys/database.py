import json
from datetime import datetime

DATA_FILE = 'data.json'
LOG_FILE = 'log.txt'

def load_data():
    try:
        with open(DATA_FILE, 'r') as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return {}

def save_data(data):
    with open(DATA_FILE, 'w') as f:
        json.dump(data, f, indent=4)

def log_transaction(msg):
    with open(LOG_FILE, 'a') as f:
        f.write(f"[{datetime.now()}] {msg}\n")
