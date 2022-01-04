
import json
data = {'name': 'john doe',
        'age': 35,
        'city': 'Collingwood'}
# json file will be created
with open('app.json', 'w') as fp:
    json.dump(data, fp)

#output app.json:
#{"name": "john doe", "age": 35, "city": "Collingwood"}
