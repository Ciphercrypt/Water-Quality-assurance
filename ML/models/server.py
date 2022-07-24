import numpy as np
from flask import Flask, request, jsonify
import pickle
app = Flask(__name__)
# Load the model
model = pickle.load(open('D:/avi/webdev/node-react/water/model.pkl','rb+'))
@app.route('/predict',methods=['POST'])
def predict():
    # Get the data from the POST request.
    data = request.get_json(force=True)
    #print(data)
    # Make prediction using model loaded from disk as per the data.
    #prediction = model.predict([np.array(list(data.values()))])
    prediction = model.predict([[5.126763,	402.883113,	4.708658]])
    
    # Take the first value of prediction
    print(prediction)
    output = prediction[0]
    return jsonify(int(output))
if __name__ == '__main__':
    app.run(port=5000, debug=True)