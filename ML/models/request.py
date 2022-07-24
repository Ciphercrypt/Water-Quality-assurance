import requests
url = 'http://localhost:5000/predict'
r = requests.post(url,json={"ph":0.70517827, "conduct":-1.77878841,  "turbidity":0.58902953})
print(r.json())