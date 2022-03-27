from flask import Flask
from flask import request, url_for, send_file
import os

app = Flask(__name__)
FLAG = os.getenv('FLAG')

@app.route("/")
def index():
    if request.headers.get('flag'):
        header = request.headers.get('flag')
        if header == FLAG:
            return send_file("static/picture2.jpg", mimetype='image/jpg')
    return send_file("static/picture1.jpg", mimetype='image/jpg')
 

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
