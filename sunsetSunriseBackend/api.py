from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS
from controller import Controller
app = Flask(__name__)
api = Api(app)
CORS(app)

class sunriseSunset_API(Resource):
    def post(self):
        json_data = request.get_json()
        latitude = json_data['latitude']
        longitude = json_data['longitude']
        date = json_data['date']
        print(json_data)
        sunriseSunset = Controller()
        sunriseSunsetReports = sunriseSunset.getSunriseReport(date, latitude, longitude)
        return {'reports': sunriseSunsetReports}

api.add_resource(sunriseSunset_API, '/api')
if __name__ == '__main__':
    app.run(debug=False)
