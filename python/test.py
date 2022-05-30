# Difference

# ###
 
from flask import Flask, flash, request, redirect, url_for,render_template,abort

from flask_cors import CORS, cross_origin
import json

 
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

 
@app.route('/text')
def index():
    results = request.args.get('text')
    print(request.args.get('text'))
   
    return json.dumps(results)
   
 
if __name__ == '__main__':
    app.run('0.0.0.0',debug=True, ssl_context=('cert.pem','key.pem'))
    #from waitress import serve
    #serve(app, host="0.0.0.0", port=5000)
    
 
