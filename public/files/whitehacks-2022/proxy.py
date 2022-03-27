from flask import Flask
from flask import request, url_for, Response
import tldextract
import requests
import os

app = Flask(__name__)

FLAG = os.getenv('FLAG')
HOST_NAME = os.getenv('HOST_NAME', 'meoware-api.local')
headers = {'Flag': FLAG}

@app.route("/")
def index():
    if request.args.get('url', type = str):
        url = request.args.get('url', type = str)
        parser_results = tldextract.extract(url)

        if parser_results.domain == HOST_NAME:
            print(headers)
            r = requests.get(url, headers=headers, verify=False)
            excluded_headers = ['content-encoding', 'content-length', 'transfer-encoding', 'connection']
            h = [(name, value) for (name, value) in r.raw.headers.items()
               if name.lower() not in excluded_headers]
            return Response(r.content, r.status_code, h)
    return "Error"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
