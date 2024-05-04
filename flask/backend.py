# backend.py
from flask import Flask, request, jsonify
from trial import polarity_scores_roberta
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/run', methods=['POST'])
def my_endpoint():
    data = request.json
    msg = data.get('speech')
    res = polarity_scores_roberta(msg)
    if res['neg'] > res['pos']:
        d = res['neg'] * -1
    elif res['neg'] < res['pos']:
        d = res['pos']
    else:
        d = 0
    return str(d)


if __name__ == '__main__':
    app.run(debug=True)
