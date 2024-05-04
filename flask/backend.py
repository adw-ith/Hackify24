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
    if res['neg'] > res['pos'] and res['neg'] > res['neu']:
        d = res['neg'] * -1
    elif res['neg'] < res['pos'] and res['neu'] < res['pos']:
        d = res['pos']
    else:
        d = 0
    print(d)
    return str(d)


if __name__ == '__main__':
    app.run(debug=True)
