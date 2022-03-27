from flask import Flask
from flask import request, url_for, render_template
import os 


app = Flask(__name__)

API = os.getenv('API_NAME', 'meoware-api.local')
PROXY = os.getenv('PROXY_NAME', 'meoware-proxy.local')


@app.route("/")
def index():
    return render_template('main.html', API=API, PROXY=PROXY)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
